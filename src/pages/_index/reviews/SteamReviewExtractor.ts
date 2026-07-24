// https://partner.steamgames.com/doc/store/getreviews
interface SteamReviewsResponse {
    query_summary: {
        total_positive: number;
        total_reviews: number;
    };
}

async function fetchReviewStats(appid: number): Promise<{ totalReviews: number; positivePercentage: number }> {
    const endpoint = `https://store.steampowered.com/appreviews/${appid}`;
    const params = new URLSearchParams({
        filter: 'all',
        language: 'all',
        day_range: 'all',
        cursor: '*',
        review_type: 'all',
        purchase_type: 'all',
        num_per_page: '1',
        json: '1',
    });

    const response = await fetch(`${endpoint}?${params.toString()}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data: SteamReviewsResponse = await response.json();

    const { total_positive, total_reviews } = data.query_summary;
    const positivePercentage = total_reviews > 0 ? (total_positive / total_reviews) * 100 : 0;

    return {
        totalReviews: total_reviews,
        positivePercentage: positivePercentage,
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