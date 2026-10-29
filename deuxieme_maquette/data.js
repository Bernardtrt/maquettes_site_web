// Configuration & Données techniques pour la maquette 2 : Style Architectural & Haute Précision
const CONFIG_CHANTIER = {
    entreprise: {
        nom: "VANEAU ARCHITECTURE TOITURE",
        sigle: "VAT-ÉLITE",
        slogan: "Ingénierie de toiture & Sauvetage d'urgence 24/7",
        artisan: "Julien Vaneau",
        titre: "Compagnon Couvreur-Zingueur & Expert Thermique",
        telephone: "06 12 34 56 78",
        telephoneFormat: "tel:0612345678",
        email: "urgence@vaneau-architecture-toiture.fr",
        adresse: "Pôle Artisanal & Atelier Zinc, 33000 Bordeaux",
        assurance: "SMABTP Police N° FR-849204829 — Garantie Décennale 10 ans",
        qualifications: ["Qualibat RGE n° 3101", "Artisan Certifié Velux", "Maître Zingueur VMZINC"]
    },
    zones: [
        { id: "core", rayon: "0 - 15 km", label: "Intervention Immédiate", delai: "< 2 heures", couleur: "#FF6B00", coutDeplacement: "0 € Offert" },
        { id: "mid", rayon: "15 - 35 km", label: "Rayon Régional Standard", delai: "< 24 heures", couleur: "#38BDF8", coutDeplacement: "0 € Offert" },
        { id: "outer", rayon: "35 - 50 km", label: "Grands Chantiers Toiture", delai: "Sur RDV sous 48h", couleur: "#94A3B8", coutDeplacement: "0 € Offert" }
    ],
    materiaux: [
        {
            nom: "Ardoise Naturelle d'Espagne",
            norme: "NF 228 / CE",
            longevite: "70 à 100 ans",
            resistanceGel: "Classe A1",
            caractere: "Élégance minérale pure, incombustible et inaltérable"
        },
        {
            nom: "Zinc Joint Debout (VMZINC)",
            norme: "EN 988",
            longevite: "80 à 100 ans",
            resistanceGel: "Totale (étanchéité absolue pentes faibles)",
            caractere: "Modernité architecturale, légèreté et patine naturelle"
        },
        {
            nom: "Tuile Terre Cuite Grand Moule",
            norme: "NF EN 1304",
            longevite: "30 à 50 ans",
            resistanceGel: "Garantie 30 ans gel certifié",
            caractere: "Tradition régionale, forte résistance aux vents violents"
        },
        {
            nom: "Bac Acier Isolé Double Peau",
            norme: "Euroclasse A2-s1, d0",
            longevite: "40 ans",
            resistanceGel: "Anti-condensation renforcé",
            caractere: "Idéal toitures plates, annexes et architectures contemporaines"
        }
    ]
};
