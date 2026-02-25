import React, { useState } from 'react';

const Prayer = () => {
  const [selectedPrayer, setSelectedPrayer] = useState(null);

  // Updated Prayer List - Content matches your public/gallery filenames
  const prayers = [
    { id: 1, name: "State Anthem (Vande Utkala Janani)", type: "text" },
    { id: 2, name: "National Anthem", type: "text" },
    { id: 3, name: "Prayer from lightning the lamp", content: "lamp_prayer.jpg", type: "image" },
    { id: 4, name: "Saraswati Vandana", content: "saraswati_vandana.jpg", type: "image" },
    { id: 5, name: "Saraswati Prathana", content: "saraswati_prathana.jpg", type: "image" },
    { id: 6, name: "Guru Vandana", content: "guru_vandana.jpg", type: "image" }
  ];

  // Full Lyrics Restored
  const prayerLyrics = {
    1: `Bandē utkaḷa jananī
Cāru hāsamayī cāru bhāṣamayī,
Jananī, jananī, jananī !

Pūta-payōdhi-bidhauta-śarīrā,
Tāḷatamāḷa-suśōbhita-tīrā,
Śubhrataṭinīkūḷa-śīkara-samīrā
Jananī, jananī, jananī !

Ghana ghana banabhūmi rājita aṅgē,
Nīḷa bhūdharamāḷā sāje taraṅgē,
Kaḷa kaḷa mukharita cāru bihaṅgē
Jananī, jananī, jananī !

Sundaraśāḷi-suśōbhita-kṣetrā,
Jñānabijñāna-pradarśita-netrā,
Ẏōgīr̥ṣigaṇa-uṭaja-pabitrā
Jananī, jananī, jananī !

Sundara mandira maṇḍita-deśā,
Cārukaḷābaḷi-śobhita-beśā,
Puṇya tīrthacaya-pūrṇṇa-pradeśā
Jananī, jananī, jananī !

Utkaḷa surabara-darpita-gēhā,
Arikuḷa-śoṇita-carccita-dēhā,
Biśwabhūmaṇḍaḷa-kr̥tabara-snēhā
Jananī, jananī, jananī !

Kabikuḷamauḷi sunandana-bandyā,
Bhubanabighōṣita-kīrttianindyā,
Dhanyē, puṇyē ciraśaraṇyē
Jananī, jananī, jananī !`,

    2: `Jana-gaṇa-mana-adhināẏaka jaẏa hē
Bhārata-bhāgya-bidhātā!
Pañjāba Sindhu Gujarāṭa Marāṭhā
Drābiṛa Uṯkala Baṅga
Bindhya Himācala Yamunā Gaṅgā
Ucchala-jaladhi-taraṅga
Taba śubha nāmē jāgē,
Taba śubha āśiṣa māgē,
Gāhē taba jaẏa-gāthā.
Jana-gaṇa-maṅgala-dāẏaka jaẏa hē
Bhārata-bhāgya-bidhātā!
Jaẏa hē, jaẏa hē, jaẏa hē,
Jaẏa jaẏa jaẏa jaẏa hē.`
  };

  return (
    <div className="bg-[#fff9db] min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
        <div className="p-8 border-b border-gray-100">
          <h1 className="text-4xl font-light text-gray-800 uppercase tracking-tight">School Prayer</h1>
        </div>

        <div className="p-8">
          <table className="w-full border-collapse border border-gray-800">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-800 p-3 font-bold text-lg w-20">S.L. No.</th>
                <th className="border border-gray-800 p-3 font-bold text-lg">NAME</th>
                <th className="border border-gray-800 p-3 font-bold text-lg w-24">VIEW</th>
              </tr>
            </thead>
            <tbody>
              {prayers.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50">
                  <td className="border border-gray-800 p-3 text-center text-lg">{p.id}</td>
                  <td className="border border-gray-800 p-3 text-left text-lg font-medium">{p.name}</td>
                  <td className="border border-gray-800 p-3 text-center">
                    <button 
                      onClick={() => setSelectedPrayer(p)}
                      className="text-[#c2410c] font-bold text-lg hover:underline"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL POPUP */}
      {selectedPrayer && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col border-t-8 border-[#991b1b]">
            <div className="p-6 border-b flex justify-between items-center bg-gray-50">
              <h3 className="text-2xl font-black text-[#1a365d] uppercase">{selectedPrayer.name}</h3>
              <button 
                onClick={() => setSelectedPrayer(null)}
                className="bg-[#991b1b] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold hover:bg-red-800 transition-all"
              >
                ✕
              </button>
            </div>
            
            <div className="p-8 overflow-y-auto bg-white">
              {selectedPrayer.type === "text" ? (
                <pre className="whitespace-pre-wrap font-serif text-xl md:text-2xl leading-relaxed text-gray-900 text-center italic">
                  {prayerLyrics[selectedPrayer.id]}
                </pre>
              ) : (
                <div className="space-y-4 text-center">
                  <img 
                    /* ✅ FIXED PATH: Pointing to public/gallery directly */
                    src={`/gallery/${selectedPrayer.content}`} 
                    alt={selectedPrayer.name}
                    className="mx-auto rounded-lg shadow-lg max-w-full h-auto border-2 border-orange-100"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/500x700?text=Check+Filename+in+public/gallery"; }}
                  />
                  <p className="text-sm text-gray-500 italic mt-4">Official School Prayer Document</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Prayer;