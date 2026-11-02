interface SteamReviewsResponse {
    response?: {
        query_summary?: {
            total_positive: number;
            total_negative: number;
            total_reviews: number;
        };
    };
    query_summary?: {
        total_positive: number;
        total_negative: number;
        total_reviews: number;
    };
}

async function fetchReviewStats(appid: number): Promise<{ totalReviews: number; positivePercentage: number }> {
    const endpoint = 'https://api.steampowered.com/IUserReviewsService/GetAppReviews/v1/';

    const input = {
        appid,
        filter: 1,
        languages: ['all'],
        day_range: 0,
        cursor: '*',
        review_type: 0,
        purchase_type: 1,
        num_per_page: 1
    };

    const params = new URLSearchParams({
        input_json: JSON.stringify(input)
    });

    const response = await fetch(`${endpoint}?${params}`);

    if (!response.ok) {
        throw new Error(`Steam API error: ${response.status} ${response.statusText}`);
    }

    const data: SteamReviewsResponse = await response.json();

    const summary = data.response?.query_summary ?? data.query_summary;

    if (!summary) {
        throw new Error(`Steam API returned an unexpected response: ${JSON.stringify(data)}`);
    }

    const { total_positive, total_reviews } = summary;

    return {
        totalReviews: total_reviews,
        positivePercentage: total_reviews > 0
            ? (total_positive / total_reviews) * 100
            : 0
    };
}

let cachedPromise: Promise<{ totalReviews: number; positivePercentage: number }> | null = null;

export default function fetchPixiEditorReviewStats(): Promise<{ totalReviews: number; positivePercentage: number }> {
    if (!cachedPromise) {
        cachedPromise = fetchReviewStats(2218560).catch((err) => {
            cachedPromise = null;
            throw err;
        });
    }

    return cachedPromise;
}
