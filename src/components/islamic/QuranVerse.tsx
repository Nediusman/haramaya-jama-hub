import { useState, useEffect } from "react";
import { RefreshCw, BookOpen, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Verse {
  arabic: string;
  translation: string;
  reference: string;
  transliteration: string;
}

const verses: Verse[] = [
  {
    arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
    translation: "And whoever fears Allah - He will make for him a way out.",
    reference: "Quran 65:2",
    transliteration: "Wa man yattaqi Allaha yaj'al lahu makhrajan"
  },
  {
    arabic: "وَاللَّهُ خَيْرٌ حَافِظًا ۖ وَهُوَ أَرْحَمُ الرَّاحِمِينَ",
    translation: "But Allah is the best guardian, and He is the most merciful of the merciful.",
    reference: "Quran 12:64",
    transliteration: "Wallahu khayrun hafidhan wa huwa arham ar-rahimeen"
  },
  {
    arabic: "وَبَشِّرِ الصَّابِرِينَ",
    translation: "And give good tidings to the patient.",
    reference: "Quran 2:155",
    transliteration: "Wa bashshir as-sabireen"
  },
  {
    arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "Indeed, with hardship comes ease.",
    reference: "Quran 94:6",
    transliteration: "Inna ma'al usri yusra"
  },
  {
    arabic: "وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ",
    translation: "And He is with you wherever you are.",
    reference: "Quran 57:4",
    transliteration: "Wa huwa ma'akum ayna ma kuntum"
  },
  {
    arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ",
    translation: "So remember Me; I will remember you.",
    reference: "Quran 2:152",
    transliteration: "Fadhkurooni adhkurkum"
  },
  {
    arabic: "وَتَوَكَّلْ عَلَى اللَّهِ ۚ وَكَفَىٰ بِاللَّهِ وَكِيلًا",
    translation: "And rely upon Allah; and sufficient is Allah as Disposer of affairs.",
    reference: "Quran 33:3",
    transliteration: "Wa tawakkal 'ala Allah wa kafa billahi wakeela"
  }
];

export function QuranVerse() {
  const [currentVerse, setCurrentVerse] = useState<Verse>(verses[0]);
  const [showTransliteration, setShowTransliteration] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Load a random verse on component mount
    const randomIndex = Math.floor(Math.random() * verses.length);
    setCurrentVerse(verses[randomIndex]);
  }, []);

  const getNewVerse = () => {
    let newVerse;
    do {
      const randomIndex = Math.floor(Math.random() * verses.length);
      newVerse = verses[randomIndex];
    } while (newVerse.reference === currentVerse.reference && verses.length > 1);
    
    setCurrentVerse(newVerse);
  };

  const toggleFavorite = () => {
    const newFavorites = new Set(favorites);
    if (favorites.has(currentVerse.reference)) {
      newFavorites.delete(currentVerse.reference);
    } else {
      newFavorites.add(currentVerse.reference);
    }
    setFavorites(newFavorites);
  };

  const isFavorite = favorites.has(currentVerse.reference);

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-blue-800">
          <BookOpen className="w-5 h-5" />
          Daily Verse
        </CardTitle>
        <p className="text-sm text-blue-600 font-arabic">آية اليوم</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <p className="font-arabic text-xl md:text-2xl text-blue-900 leading-relaxed mb-4 p-4 bg-white/50 rounded-lg">
            {currentVerse.arabic}
          </p>
          
          {showTransliteration && (
            <p className="text-blue-700 italic mb-3 text-sm">
              {currentVerse.transliteration}
            </p>
          )}
          
          <p className="text-blue-800 text-base md:text-lg mb-3 leading-relaxed">
            "{currentVerse.translation}"
          </p>
          
          <p className="text-blue-600 text-sm font-semibold">
            — {currentVerse.reference}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          <Button
            variant="outline"
            size="sm"
            onClick={getNewVerse}
            className="border-blue-200 text-blue-700 hover:bg-blue-50"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            New Verse
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowTransliteration(!showTransliteration)}
            className="border-blue-200 text-blue-700 hover:bg-blue-50"
          >
            {showTransliteration ? "Hide" : "Show"} Transliteration
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={toggleFavorite}
            className={`border-blue-200 hover:bg-blue-50 ${
              isFavorite ? "text-red-600" : "text-blue-700"
            }`}
          >
            <Heart className={`w-4 h-4 mr-2 ${isFavorite ? "fill-current" : ""}`} />
            {isFavorite ? "Favorited" : "Favorite"}
          </Button>
        </div>

        <div className="text-center">
          <p className="text-xs text-blue-500">
            Tap "New Verse" for daily inspiration from the Quran
          </p>
        </div>
      </CardContent>
    </Card>
  );
}