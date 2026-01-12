import React from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import vector from "@/assets/images/Texture.svg";
import SubHeader from "@/components/common/SubHeader";

type Props = {};

const Legal = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Sub header */}
      <div className="hidden lg:block">
        <SubHeader title="Legal" />
      </div>

      <div
        onClick={() => navigate(-1)}
        className="flex items-center gap-4 bg-white  lg:hidden p-3"
      >
        <div className="bg-[#EBEBEB99] text-primaryColor rounded-[15px] flex justify-center items-center w-[45px] h-[45px]">
          <ChevronLeft size={20} />
        </div>
        <p className="font-bold text-base text-primaryColor">Legal</p>
      </div>

      {/* Content Section */}
      <div className="lg:bg-[#F2F2F2] py-6 lg:py-16 px-4 lg:px-6 flex justify-center">
        <div className="max-w-[1160px] bg-white lg:rounded-2xl lg:shadow-md lg:p-10 items-start gap-10  mx-auto w-full">
          {/* Terms of Use Section */}
          <div className="">
            <h2 className="text-2xl font-bold text-black mb-6">
              QuickDoctor – Terms of Use
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-black mb-3">
                  1. Introduction
                </h3>
                <p className="text-[#6E7177] text-sm leading-relaxed">
                  Welcome to QuickDoctor. Use of the platform is subject to
                  these terms and constitutes acceptance of them.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-3">
                  2. Nature of the Service
                </h3>
                <p className="text-[#6E7177] text-sm leading-relaxed">
                  QuickDoctor is solely a technological platform that connects
                  users with independent doctors who hold valid licenses from
                  the Ministry of Health. QuickDoctor itself does not provide
                  medical services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-3">
                  3. Professional Responsibility
                </h3>
                <p className="text-[#6E7177] text-sm leading-relaxed">
                  All medical services are provided exclusively by independent
                  doctors. The responsibility for providing medical advice,
                  diagnosis, or treatment lies solely with the doctor.
                  QuickDoctor verifies doctors' licenses but is not responsible
                  for the content of the advice or the quality of medical
                  services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-3">
                  4. Use of the Platform
                </h3>
                <p className="text-[#6E7177] text-sm leading-relaxed">
                  The service is intended for users aged 18 and above. Minors
                  may use the service only with parental or guardian consent.
                  Users must provide accurate and correct information, must not
                  use the service in a misleading or false manner, and must not
                  use the service for unlawful purposes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-3">
                  5. Payments and Cancellations
                </h3>
                <p className="text-[#6E7177] text-sm leading-relaxed">
                  Payments are processed through authorized external payment
                  providers. The cancellation and refund policy will be
                  presented to the user at the time of booking.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-3">
                  6. Limitation of Liability
                </h3>
                <p className="text-[#6E7177] text-sm leading-relaxed">
                  QuickDoctor is not responsible for direct or indirect damages
                  arising from medical advice or treatment provided by doctors.
                  QuickDoctor's liability is limited to the amount paid by the
                  user for the service. QuickDoctor does not guarantee full
                  service availability and is not responsible for technical
                  issues.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-3">
                  7. Changes
                </h3>
                <p className="text-[#6E7177] text-sm leading-relaxed">
                  QuickDoctor may update these terms from time to time.
                  Continued use of the service constitutes acceptance of the
                  updated terms.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-3">
                  8. Governing Law and Jurisdiction
                </h3>
                <p className="text-[#6E7177] text-sm leading-relaxed">
                  These terms are governed by the laws of the State of Israel.
                  Any dispute shall be resolved exclusively in the competent
                  courts of the Tel Aviv–Jaffa district.
                </p>
              </div>
            </div>
          </div>

          {/* Privacy Policy Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
              📑 QuickDoctor – Privacy Policy
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-black mb-3">
                  1. Information Collected
                </h3>
                <p className="text-[#6E7177] text-sm leading-relaxed mb-3">
                  We collect:
                </p>
                <ul className="list-disc list-inside text-[#6E7177] text-sm leading-relaxed space-y-1 ml-4">
                  <li>
                    <strong>Personal information:</strong> name, phone, email,
                    age.
                  </li>
                  <li>
                    <strong>Sensitive medical information:</strong> symptom
                    descriptions, medical documents, medical history, diagnoses,
                    and records.
                  </li>
                  <li>
                    <strong>Technical information:</strong> IP address, cookies,
                    device data.
                  </li>
                  <li>
                    <strong>Payment information:</strong> via external payment
                    processors (credit card details are not stored on the
                    platform).
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-3">
                  2. Use of Information
                </h3>
                <ul className="list-disc list-inside text-[#6E7177] text-sm leading-relaxed space-y-1 ml-4">
                  <li>For scheduling appointments and communication.</li>
                  <li>
                    For transferring information to the doctor chosen by the
                    user.
                  </li>
                  <li>For billing and payment purposes.</li>
                  <li>For service improvement and anonymous statistics.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-3">
                  3. Information Sharing
                </h3>
                <p className="text-[#6E7177] text-sm leading-relaxed">
                  Medical information is shared only with the treating doctor.
                  Information may be shared with competent authorities as
                  required by law.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-3">
                  4. Data Storage and Security
                </h3>
                <p className="text-[#6E7177] text-sm leading-relaxed">
                  Data is stored on secure servers in accordance with Ministry
                  of Health guidelines and medical information security
                  standards. Access is restricted to authorized employees only.
                  Data is retained until account deletion or up to 7 years, in
                  line with legal requirements.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-3">
                  5. User Rights
                </h3>
                <p className="text-[#6E7177] text-sm leading-relaxed">
                  Users have the right to review information stored about them,
                  request corrections or deletion, and opt out of marketing
                  communications. For inquiries, contact:{" "}
                  <a
                    href="mailto:privacy@quickdoctor.com"
                    className="text-primaryColor hover:underline"
                  >
                    privacy@quickdoctor.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
