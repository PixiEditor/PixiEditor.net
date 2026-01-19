export interface Proposal {
    id: number;
    title: string;
    url: string;
    votes: number;
    status: string;
    forVersion: string | null;
}

export interface Topic {
    id: number;
    slug: string;
    title: string;
    vote_count: number;
    post_stream: {
        posts: Array<{
            cooked: string;
            username: string;
        }>;
    };
}