import Link from "next/link";

export default function ProgressBar({ currentStep }: { currentStep: number }) {
  const steps = [
    { id: 1, label: "Shopping Cart", href: "/cart?step=1" },
    { id: 2, label: "Checkout", href: "/cart?step=2" },
    { id: 3, label: "Order Status", href: "/cart?step=3" },
  ];

  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-md">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          {/* Step Circle */}
          <Link href={step.href}>
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full border ${
                currentStep >= step.id
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-500 border-gray-300"
              }`}
            >
              {step.id}
            </div>
          </Link>

          {/* Step Label */}
          <span
            className={`ml-2 text-sm ${
              currentStep >= step.id
                ? "text-black font-semibold"
                : "text-gray-500"
            }`}
          >
            {step.label}
          </span>

          {/* Step Divider */}
          {index < steps.length - 1 && (
            <div
              className={`flex-1 h-px mx-4 ${
                currentStep > step.id ? "bg-black" : "bg-gray-300"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
