import { useState, useEffect } from 'react';

export const useQnAPosts = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // TODO: Replace with actual API call
                const samplePosts = [
                    {
                        id: 36,
                        title: "이거 어떻게 해요?",
                        author: "윤민서",
                        date: "2024.09.01",
                        content: "React 공부 하고 있습니다",
                        votes: 5,
                        views: 120
                    }
                    // Add more sample data as needed
                ];
                setPosts(samplePosts);
                setIsLoading(false);
            } catch (error) {
                console.error("Failed to fetch posts:", error);
                setError(error);
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return { posts, isLoading, error };
};
