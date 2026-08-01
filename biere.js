/* =====================================================================
   BIERDECKEL — Datenbank
   Diese Datei wird von index.html geladen. Nur hier stehen Daten.

   BRAUEREIEN
     lat/lon  Koordinaten für die Karte (Ortsmitte, nicht Werksadresse)
     logo     Dateiname im Ordner logos/, z. B. "floetzinger.png"
              Leer lassen -> es erscheint ein gedrucktes Monogramm

   BIERE
     datum       "JJJJ-MM-TT"
     brauerei    muss exakt einem Schlüssel aus BRAUEREIEN entsprechen
     bewertung   1–10 oder null
     alkoholfrei true / false
     ""          leeres Feld erscheint auf der Karte als —
     "?"         Wert noch nicht am Etikett geprüft
   ===================================================================== */

const BRAUEREIEN = {
  "Flötzinger Bräu":                  { ort:"Rosenheim, Oberbayern", lat:47.8561, lon:12.1275, logo:"" },
  "Herzogliches Brauhaus Tegernsee":  { ort:"Tegernsee, Oberbayern", lat:47.7122, lon:11.7586, logo:"" },
  "Augustiner-Bräu":                  { ort:"München",               lat:48.1372, lon:11.5450, logo:"" },
  "Alpirsbacher Klosterbräu":         { ort:"Alpirsbach, Schwarzwald", lat:48.3454, lon:8.4042, logo:"" },
  "Ayinger Privatbrauerei":           { ort:"Aying, Oberbayern",     lat:47.9683, lon:11.7803, logo:"" },
  "Tucher Bräu":                      { ort:"Fürth, Mittelfranken",  lat:49.4783, lon:10.9903, logo:"" },
  "Bitburger":                        { ort:"Bitburg, Eifel",        lat:49.9731, lon:6.5272,  logo:"" }
};

const BIERE = [
  { datum:"2026-07-11", name:"Hell", brauerei:"Flötzinger Bräu",
    stil:"Helles", alkohol:"4,9 % ?", stammwuerze:"", ibu:"", farbe:"Goldgelb",
    alkoholfrei:false, bewertung:null, notiz:"" },

  { datum:"2026-07-18", name:"1543 Hefe-Weisse kellertrüb", brauerei:"Flötzinger Bräu",
    stil:"Hefeweizen, hell", alkohol:"5,4 % ?", stammwuerze:"", ibu:"", farbe:"Bernstein, trüb",
    alkoholfrei:false, bewertung:null, notiz:"" },

  { datum:"2026-07-19", name:"Hell", brauerei:"Herzogliches Brauhaus Tegernsee",
    stil:"Helles", alkohol:"4,8 %", stammwuerze:"11,7 % ?", ibu:"", farbe:"Hellgold",
    alkoholfrei:false, bewertung:null, notiz:"" },

  { datum:"2026-07-20", name:"Alkoholfrei Hell", brauerei:"Augustiner-Bräu",
    stil:"Helles, alkoholfrei", alkohol:"< 0,5 %", stammwuerze:"", ibu:"", farbe:"Hellgold",
    alkoholfrei:true, bewertung:null, notiz:"" },

  { datum:"2026-07-24", name:"Kleiner Mönch", brauerei:"Alpirsbacher Klosterbräu",
    stil:"Spezial / Vollbier", alkohol:"5,2 % ?", stammwuerze:"", ibu:"", farbe:"Goldgelb",
    alkoholfrei:false, bewertung:null, notiz:"" },

  { datum:"2026-07-26", name:"Spezial", brauerei:"Herzogliches Brauhaus Tegernsee",
    stil:"Export / Spezial", alkohol:"5,6 %", stammwuerze:"", ibu:"", farbe:"Kräftiges Gold",
    alkoholfrei:false, bewertung:null, notiz:"" },

  { datum:"2026-07-27", name:"Hell Alkoholfrei", brauerei:"Herzogliches Brauhaus Tegernsee",
    stil:"Helles, alkoholfrei", alkohol:"< 0,5 %", stammwuerze:"", ibu:"", farbe:"Hellgold",
    alkoholfrei:true, bewertung:null, notiz:"" },

  { datum:"2026-07-28", name:"Alkoholfrei Hell", brauerei:"Flötzinger Bräu",
    stil:"Helles, alkoholfrei", alkohol:"< 0,5 %", stammwuerze:"", ibu:"", farbe:"Hellgold",
    alkoholfrei:true, bewertung:null, notiz:"" },

  { datum:"2026-07-30", name:"Lagerbier Hell", brauerei:"Augustiner-Bräu",
    stil:"Helles", alkohol:"5,2 %", stammwuerze:"11,8 % ?", ibu:"", farbe:"Hellgold",
    alkoholfrei:false, bewertung:null, notiz:"" },

  { datum:"2026-07-31", name:"0,0 % Herb", brauerei:"Bitburger",
    stil:"Pils, alkoholfrei", alkohol:"0,0 %", stammwuerze:"", ibu:"", farbe:"Blassgold",
    alkoholfrei:true, bewertung:null, notiz:"" },

  { datum:"2026-07-31", name:"Bräuweisse", brauerei:"Ayinger Privatbrauerei",
    stil:"Hefeweizen, hell", alkohol:"5,1 % ?", stammwuerze:"", ibu:"", farbe:"Bernstein, trüb",
    alkoholfrei:false, bewertung:null, notiz:"" },

  { datum:"2026-08-01", name:"Sebaldus Weizen Helles Hefe", brauerei:"Tucher Bräu",
    stil:"Hefeweizen, hell", alkohol:"5,2 % ?", stammwuerze:"", ibu:"", farbe:"Bernstein, trüb",
    alkoholfrei:false, bewertung:null, notiz:"" }
];
