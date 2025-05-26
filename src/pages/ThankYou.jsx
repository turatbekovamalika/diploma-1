export default function ThankYou() {
  setTimeout(() => {
    window.location.href = "/";
  }, 2000);
  return (
    <div className="ThankYou">
      <h1>Thank you!</h1>
      <p>Your order has been created. Please wait for a confirmation call.</p>
    </div>
  );
}
