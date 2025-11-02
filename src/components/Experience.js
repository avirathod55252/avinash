import React from "react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-16 bg-gray-100 max-w-6xl mx-auto px-6"
    >
      <h2 className="text-3xl font-bold text-blue-600 border-b-4 border-blue-500 inline-block mb-8">
        Experience
      </h2>
      <div className="space-y-8">
        <div>
          <h3 className="font-bold text-xl">
            Computer Programmer (Contract) - Ahilyanagar Cantonment Board
          </h3>
          <p className="italic text-sm">Jul 2024 – Aug 2025</p>
          <ul className="list-disc ml-6 mt-2">
            <li>
              Website Management & Maintenance – Added new pages, modules, and
              conducted UAT for RTRM & Echhawani.
            </li>
            <li>
              GIS & Software Setup (BARC Project) – Configured BARC Change
              Detection Software with QGIS.
            </li>
            <li>
              Zoho Developer – Migrated NIC → Zoho, managed Zoho Workplace & 2FA
              with Gov OneAuth.
            </li>
            <li>
              Handled government software like RTRM, Parichay, and e-Governance
              platforms.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl">
            Technical Content Writer - GeeksforGeeks (Remote)
          </h3>
          <p className="italic text-sm">Apr 2023 – Apr 2024</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Published and improved 100+ technical articles.</li>
            <li>Secured 12th rank in Technical Scripter 2022.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
