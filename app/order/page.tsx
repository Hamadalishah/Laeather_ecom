import ProgressBar from "../components/progress_bar";


export default function OrderStatus() {
  return (
    <div className="p-6">
      {/* Progress Bar */}
      <ProgressBar currentStep={3} />

      {/* Content for the Order Status */}
      <div className="mt-6">
        <h1 className="text-xl font-bold">Order Status</h1>
        <p>Your order details go here...</p>
      </div>
    </div>
  );
}
