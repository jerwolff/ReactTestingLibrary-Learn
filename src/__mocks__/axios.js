const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: "Bob",
                    last: "Bobinson"
                },
                email: "abcd0@gmail.com",
                picture: {
                    large: "https://randomuser.me/api/portraits/men/23.jpg"
                },
                login: {
                    username: 'BobbyBobbinsonsson'
                }
            },
            {
                name: {
                    first: "Bob",
                    last: "Bobinson"
                },
                email: "abcd1@gmail.com",
                picture: {
                    large: "https://randomuser.me/api/portraits/men/23.jpg"
                },
                login: {
                    username: 'BobbyBobbinsonsson'
                }
            },
            {
                name: {
                    first: "Bob",
                    last: "Bobinson"
                },
                email: "abcd2@gmail.com",
                picture: {
                    large: "https://randomuser.me/api/portraits/men/23.jpg"
                },
                login: {
                    username: 'BobbyBobbinsonsson'
                }
            },
            {
                name: {
                    first: "Bob",
                    last: "Bobinson"
                },
                email: "abcd3@gmail.com",
                picture: {
                    large: "https://randomuser.me/api/portraits/men/23.jpg"
                },
                login: {
                    username: 'BobbyBobbinsonsson'
                }
            },
            {
                name: {
                    first: "Bob",
                    last: "Bobinson"
                },
                email: "abcd4@gmail.com",
                picture: {
                    large: "https://randomuser.me/api/portraits/men/23.jpg"
                },
                login: {
                    username: 'BobbyBobbinsonsson'
                }
            }
        ]
    }
}

export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}