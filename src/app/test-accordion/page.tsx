'use client';

import { useState } from 'react';
import Accordion from '@/components/Accordion';

const testItems = [
  {
    title: "Întrebarea de test 1",
    content: "Acesta este răspunsul la întrebarea de test 1. Faceți clic pe diferite întrebări pentru a le vedea deschizându-se și închizându-se."
  },
  {
    title: "Întrebarea de test 2",
    content: "Acesta este răspunsul la întrebarea de test 2. Acordeonul ar trebui să permită deschiderea unui singur element la un moment dat."
  },
  {
    title: "Întrebarea de test 3",
    content: "Acesta este răspunsul la întrebarea de test 3. Animațiile ar trebui să fie fluide, iar săgeata ar trebui să se rotească."
  }
];

export default function TestAccordion() {
  // State to track if the accordion is working
  const [testPassed, setTestPassed] = useState(false);

  return (
    <main className="min-h-screen">
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif text-center mb-12">Test Componentă Acordeon</h1>
          
          <div className="mb-12">
            <Accordion items={testItems} />
          </div>
          
          <div className="text-center mt-8">
            <button 
              onClick={() => setTestPassed(!testPassed)}
              className="px-6 py-3 bg-black text-white rounded"
            >
              {testPassed ? 'Test Reușit ✓' : 'Marchează Testul ca Reușit'}
            </button>
            
            {testPassed && (
              <p className="mt-4 text-green-600">
                Excelent! Acordeonul funcționează corect. Acum îl puteți utiliza în aplicația principală.
              </p>
            )}
          </div>
        </div>
      </section>

    </main>
  );
} 