const router = require("express").Router();
const Stripe = require("stripe");
const stripe = Stripe("sk_test_51Ldu2fDQIjmDqWjS1XLUHzjweViDyTnleeo44Xik7iE0jJQJ9OIeOJlxIsg0naPoICaRht4kdCuR8OY3NbZ9IpnN00hBB1iXZ1");


router.post("/payment", (req, res) => {
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "USD",
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr);
            } else {
                res.status(200).json(stripeRes);
            }
        }
    )
});

module.exports = router;