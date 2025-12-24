# Razorpay Payment Integration Guide

## Overview
This document outlines the Razorpay payment gateway integration for the Hotel Management System. Razorpay has replaced Stripe as the primary payment processor.

## Setup Instructions

### 1. Environment Variables
Add the following to your `.env.local` file:

```env
# Razorpay Payment Gateway
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

### 2. Razorpay Account
1. Sign up at [https://razorpay.com](https://razorpay.com)
2. Go to Settings → API Keys
3. Copy your Key ID and Key Secret
4. Add them to your environment variables

## Architecture

### Payment Flow

1. **Order Creation** (`/api/bookings/razorpay-order`)
   - User initiates booking
   - Order details sent to backend
   - Razorpay order created with amount and metadata
   - Order ID returned to frontend

2. **Payment Processing** (Frontend)
   - Razorpay Checkout modal opens
   - User completes payment
   - Payment ID received from Razorpay

3. **Payment Verification** (`/api/bookings/razorpay-verify`)
   - Frontend sends payment details to backend
   - Signature validation performed
   - Booking status updated to confirmed
   - Webhook notification sent (optional)

### API Endpoints

#### Create Order
**POST** `/api/bookings/razorpay-order`

Request:
```json
{
  "roomId": "room-id",
  "hotelId": "hotel-id",
  "checkIn": "2024-12-25",
  "checkOut": "2024-12-26",
  "totalPrice": 5000,
  "currency": "INR",
  "userName": "John Doe",
  "breakfastIncluded": true
}
```

Response:
```json
{
  "orderId": "order_xxxxx",
  "amount": 500000,
  "currency": "INR",
  "key": "rzp_xxxxx",
  "booking": {
    "id": "booking-id",
    "status": "pending",
    "paymentStatus": false
  }
}
```

#### Verify Payment
**POST** `/api/bookings/razorpay-verify`

Request:
```json
{
  "razorpay_payment_id": "pay_xxxxx",
  "razorpay_order_id": "order_xxxxx",
  "razorpay_signature": "signature_xxxxx"
}
```

Response:
```json
{
  "success": true,
  "booking": {
    "id": "booking-id",
    "status": "confirmed",
    "paymentStatus": true
  }
}
```

## Key Features

### 1. Multiple Payment Methods
Razorpay supports:
- Credit/Debit Cards
- UPI
- Digital Wallets (Google Pay, Apple Pay, etc.)
- Net Banking
- BNPL (Buy Now Pay Later)

### 2. Security
- PCI DSS Level 1 certified
- 3D Secure verification
- Fraud detection
- Signature validation for webhook security

### 3. Settlement
- Instant settlements available
- Multiple settlement options
- Real-time transaction tracking
- Comprehensive reporting

### 4. Webhooks (Optional)
Configure webhooks in Razorpay Dashboard for:
- `payment.authorized`
- `payment.failed`
- `order.paid`

## Component Integration

### BookingPayment Component
The `BookingPayment.tsx` component handles:
- Loading Razorpay checkout script
- Displaying payment modal
- Handling payment success/failure
- Updating booking status

```typescript
// Example usage
const handlePayment = async () => {
  const response = await fetch('/api/bookings/razorpay-order', {
    method: 'POST',
    body: JSON.stringify(bookingData),
  });
  
  const { orderId, key } = await response.json();
  
  const options = {
    key,
    order_id: orderId,
    handler: handlePaymentSuccess,
  };
  
  const rzp = new Razorpay(options);
  rzp.open();
};
```

## Testing

### Test Credentials
For testing in non-production mode:

**Test Cards:**
- Visa: 4111 1111 1111 1111
- Mastercard: 5555 5555 5555 4444
- Amex: 3782 822463 10005

**OTP:** Any 6-digit number (e.g., 123456)

### Test Mode
Enable test mode in Razorpay Dashboard to use test credentials without actual charges.

## Error Handling

Common errors and solutions:

| Error | Cause | Solution |
|-------|-------|----------|
| `Invalid key` | Wrong API credentials | Verify RAZORPAY_KEY_ID in env |
| `Amount exceeds limit` | Amount too large | Check transaction limits |
| `Signature mismatch` | Validation failed | Verify RAZORPAY_KEY_SECRET |
| `Order not found` | Invalid order ID | Ensure order exists in Razorpay |

## Monitoring & Support

### Dashboards
- [Razorpay Dashboard](https://dashboard.razorpay.com)
- Transaction history
- Settlement reports
- Payment analytics

### Support
- Documentation: [https://razorpay.com/docs](https://razorpay.com/docs)
- Support Email: support@razorpay.com
- Help Desk: [https://razorpay.com/help](https://razorpay.com/help)

## Migration from Stripe

### Changes Made
1. ✅ Removed `@stripe/stripe-js` and `stripe` packages
2. ✅ Added `razorpay` package
3. ✅ Created new payment order endpoint
4. ✅ Created payment verification endpoint
5. ✅ Updated BookingPayment component
6. ✅ Updated README and environment configuration
7. ✅ Configured Next.js for image handling

### Database Considerations
Existing bookings with Stripe `paymentIntent` IDs remain unchanged. New bookings use Razorpay `orderId`.

## Best Practices

1. **Always validate signatures** on the backend before updating booking status
2. **Use webhooks** for reliable payment confirmation
3. **Store order IDs** in database for tracking
4. **Implement retry logic** for failed payments
5. **Monitor transaction fees** and settlement rates
6. **Keep API keys secure** - never commit to version control

## Future Enhancements

- [ ] Implement webhook listeners for payment events
- [ ] Add subscription/recurring payment support
- [ ] Implement refund handling
- [ ] Add payment analytics dashboard
- [ ] Support multi-currency settlements
- [ ] Integrate Razorpay Route for transfers

---

**Last Updated:** December 24, 2025
**Version:** 1.0
