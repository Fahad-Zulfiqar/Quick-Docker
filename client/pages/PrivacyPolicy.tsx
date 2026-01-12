import SubHeader from "@/components/common/SubHeader";
import React from "react";
export const privacyPolicy = [
  {
    id: 1,
    title: "Information Collected",
    content: [
      "We collect:",
      "Personal information: name, phone, email, age.",
      "Sensitive medical information: symptom descriptions, medical documents, medical history, diagnoses, and records.",
      "Technical information: IP address, cookies, device data.",
      "Payment information: via external payment processors (credit card details are not stored on the platform).",
    ],
  },
  {
    id: 2,
    title: "Use of Information",
    content: [
      "For scheduling appointments and communication.",
      "For transferring information to the doctor chosen by the user.",
      "For billing and payment purposes.",
      "For service improvement and anonymous statistics.",
    ],
  },
  {
    id: 3,
    title: "Information Sharing",
    content: [
      "Medical information is shared only with the treating doctor.",
      "Information may be shared with competent authorities as required by law.",
    ],
  },
  {
    id: 4,
    title: "Data Storage and Security",
    content: [
      "Data is stored on secure servers in accordance with Ministry of Health guidelines and medical information security standards.",
      "Access is restricted to authorized employees only.",
      "Data is retained until account deletion or up to 7 years, in line with legal requirements.",
    ],
  },
  {
    id: 5,
    title: "User Rights",
    content: [
      "Users have the right to review information stored about them, request corrections or deletion, and opt out of marketing communications.",
      "For inquiries, contact: privacy@quickdoctor.com",
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#F0F0F0]">
      <SubHeader title="Privacy Policy" />
      <div className="py-10">
        <div className="max-w-7xl bg-white mx-auto border p-6 rounded-[15px]">
          {privacyPolicy.map((section) => (
            <div key={section.id} className="mb-6">
              <h2 className="text-xl font-bold mb-2">
                {section.id}. {section.title}
              </h2>
              {section.content.map((para, idx) => (
                <p key={idx} className="text-gray-700 mb-2">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
