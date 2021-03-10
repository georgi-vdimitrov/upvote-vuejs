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
    methods: {
        upvote(entryId) {
            const entry = this.entries.find(entry => entry.id === entryId);
            entry.votes++;
        }
    }
});