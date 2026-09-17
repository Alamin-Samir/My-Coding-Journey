const prices = [1200, 450, 3000, 89, 150]; // ধরো পণ্যের দাম

// যেগুলোর দাম ১০০০ টাকার বেশি, শুধু সেগুলোকে ফিল্টার করা
const expensiveProducts = prices.filter(price => price > 1000);

console.log(expensiveProducts); 
// আউটপুট: [1200, 3000]