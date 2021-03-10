const entryComponent = {
    template:
    `<div style="display: flex; width: 100%">
        <figure class="media-left">
            <img class="image is-64x64" v-bind:src="entry.image" />
        </figure>
        <div class="media-content">
            <div class="content">
                <p>
                    <strong>
                        <a v-bind:href="entry.url" class="has-text-info">{{ entry.title }}</a>
                        <span class="tag is-small">#{{ entry.id }}</span>
                    </strong>
                    <br>
                    {{ entry.description }}
                    <br>
                    <small class="is-size-7">Added by:
                        <img class="image is-24x24" v-bind:src="entry.avatar">
                    </small>
                </p>
            </div>
        </div>
        <div class="media-right">
            <span class="icon is-small" v-on:click="upvote(entry.id)">
                <i class="fa fa-chevron-up"></i>
                <strong class="has-text-info">{{ entry.votes}}</strong>
            </span>
        </div>
    </div>`,
    props: ['entry', 'entries'],
    methods: {
        upvote(entryId) {
            const entry = this.entries.find(entry => entry.id === entryId);
            entry.votes++;
        }
    },
};

new Vue({
    el: '#app',
    data: {
        title: 'This is the UpVote App!',
        entries: Seed.entries
    },
    computed: {
        sortedEntries() {
            return this.entries.sort((a, b) => {
                return b.votes - a.votes;
            });
        }
    },
    components: {
        'entry-component': entryComponent
    }
});