import SubHeader from "@/components/common/SubHeader";
import { ChevronLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

export const termsOfUse = [
  {
    id: 1,
    title: "Introduction",
    content: [
      "Welcome to QuickDoctor. Use of the platform is subject to these terms and constitutes acceptance of them.",
    ],
  },
  {
    id: 2,
    title: "Nature of the Service",
    content: [
      "QuickDoctor is solely a technological platform that connects users with independent doctors who hold valid licenses from the Ministry of Health.",
      "QuickDoctor itself does not provide medical services.",
    ],
  },
  {
    id: 3,
    title: "Professional Responsibility",
    content: [
      "All medical services are provided exclusively by independent doctors.",
      "The responsibility for providing medical advice, diagnosis, or treatment lies solely with the doctor. QuickDoctor verifies doctors’ licenses but is not responsible for the content of the advice or the quality of medical services.",
    ],
  },
  {
    id: 4,
    title: "Use of the Platform",
    content: [
      "The service is intended for users aged 18 and above. Minors may use the service only with parental or guardian consent.",
      "Users must provide accurate and correct information, must not use the service in a misleading or false manner, and must not use the service for unlawful purposes.",
    ],
  },
  {
    id: 5,
    title: "Payments and Cancellations",
    content: [
      "Payments are processed through authorized external payment providers.",
      "The cancellation and refund policy will be presented to the user at the time of booking.",
    ],
  },
  {
    id: 6,
    title: "Limitation of Liability",
    content: [
      "QuickDoctor is not responsible for direct or indirect damages arising from medical advice or treatment provided by doctors.",
      "QuickDoctor’s liability is limited to the amount paid by the user for the service.",
      "QuickDoctor does not guarantee full service availability and is not responsible for technical issues.",
    ],
  },
  {
    id: 7,
    title: "Changes",
    content: [
      "QuickDoctor may update these terms from time to time. Continued use of the service constitutes acceptance of the updated terms.",
    ],
  },
  {
    id: 8,
    title: "Governing Law and Jurisdiction",
    content: [
      "These terms are governed by the laws of the State of Israel. Any dispute shall be resolved exclusively in the competent courts of the Tel Aviv–Jaffa district.",
    ],
  },
];

const TermsofUse = (props: Props) => {
  const navigate =useNavigate();
  return (
    <div className="bg-[#F2F2F2] ">
      <div className="hidden lg:block">

      <SubHeader title="Terms of Use" />
      </div>
       <div  
              onClick={() => navigate(-1)}
              className="flex items-center  gap-4 bg-white  lg:hidden p-3"
            >
              <div className="bg-[#EBEBEB99] text-primaryColor rounded-[15px] flex justify-center items-center w-[45px] h-[45px]">
                <ChevronLeft size={20} />
              </div>
              <p className="font-bold text-base text-primaryColor">Terms of Use</p>
            </div>
      <div className="lg:py-10">
        <div className="max-w-7xl bg-white mx-auto border p-6  lg:rounded-[15px] ">
          {termsOfUse.map((term) => (
            <div key={term.id} className="mb-6">
              <h2 className="text-xl font-bold mb-2">
                {term.id}. {term.title}
              </h2>
              {term.content.map((para, idx) => (
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

export default TermsofUse;
