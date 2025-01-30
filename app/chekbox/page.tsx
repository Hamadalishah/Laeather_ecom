import ProgressBar from "../components/progress_bar";

export default function Checkout() {
  return (
    <div className="p-6">
      {/* Progress Bar */}
      <ProgressBar currentStep={2} />

      {/* Content for the Checkout */}
      <div className="mt-6">
        <h1 className="text-xl font-bold">Checkout</h1>
        <p>Your checkout details go here...</p>
      </div>
    </div>
  );
}
