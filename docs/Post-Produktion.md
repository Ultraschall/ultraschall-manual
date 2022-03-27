---
id: postproduktion
title: Post-Produktion
tags:
  - x
  - x
---

<!-- Tags für Docusaurus --> <!-- @todo: Bildunterschrifen hinzufügen --> <!-- @todo: Die Nummern die im Kapitel "Übersicht über die Bedienelemente und Bereiched" verwedet werden sollten sich duch alle Dokumente ziehen --> <!-- @todo: evtl. in zwei Kapitel aufteilen -->

 # Einleitung

Dein Podcast ist aufgenommen und geschnitten? Dann kannst du jetzt mit der Post-Produktion beginnen. Das Ziel in diesem Kapitel ist es den Klang von deinem Podast noch besser zu machen als er ohnehin schon ist. Dafür lernst du welche Effekte Ultraschall mitbringt und wie du diese einsetzen kannst.

# Warum Post-Produktion sinnvoll ist – und wo die Grenzen liegen

Eines gleich vorweg: Je besser deine Aufnahme, desto weniger Arbeit hast du damit in der Post-Produktion. Es lohnt sich also, von vorneherein auf Umgebungs- und Störgeräusche zu achten, Netzbrummen zu eliminieren, Sprechabstände und Aufnahmepegel feinzujustieren und insgesamt darauf zu achten, bestmögliche Aufnahmebedingungen zu haben. Trotzdem ist für ein optimales Ergebnis Post-Produktion immer wichtig und sinnvoll.

Die Ziele der Post-Produktion sind (in absteigender Relevanz-Reihenfolge):

1. **Mischung der einzelnen Spuren** Verschiedene Stimmen und Einspieler klingen in der Aufnahme verschieden laut. Im Mix werden diese Unterschiede zu einem harmonischen Ganzen angepasst.
2. **Anheben der Lautheit des Podcasts auf -16 LUFS (oder eines anderen Wunschwertes)** Podcasts werden in sehr unterschiedlichen Umgebungen gehört - nicht nur zu Hause, sondern etwa auch in der U-Bahn. Damit alles gut verstanden wird, muss der gesamte Mix eine gewisse Lautstärke aufweisen. -16 LUFS hat sich hier in Podcast-Kreisen entabliert.
3. **Reduzierung von Störungen** Je nach Aufnahmesituation enthalten die Spuren mehr oder weniger Sröranteile wie Rauschen, Raumklang, Echo, Übersprechen von anderen Mikrofonen oder Netzbrummen. Diese Störungen können zumindest teilweise reduziert werden.
4. **Optimierung des Klangbildes** Nach Geschmack können weitere Klangformungen vorgenommen werden, etwa mit Hilfe eines EQ.

Ultraschall lässt dir freie Hand und gibt dir alle Möglichkeiten für die manuelle Post-Produktion – nimmt dich bei Bedarf über die _Automated Mixing Pipeline (AMP)_ aber auch an die Hand und führt dich durch die wichtigsten Schritte (siehe auch Abschnitt [Automated Mixing Pipeline (AMP)](#Ultraschall-AMP-Automated-Mixing-Pipeline)).

Außerdem bietet dir Ultraschall auf jeder Spur eine sinnvolle [Vorauswahl an Effekten](#Vorausgew%C3%A4hlte-Effekte-und-Plug-ins), du findest sie rechts unten im [Filter-Bereich [26]](GUI-Gesamtuebersicht), nachdem du im [Mixer-Bereich [24]](GUI-Gesamtuebersicht) auf der gewünschten Spur auf `FX` drückst:

- **[DeNoise](#DeNoise)** (der ReaFir Rauschfilter zur Reduzierung von Rauschen oder Brummen mittels Anlernen von Störungsprofilen)
- **[DeEsser](#DeEsser)** (ein Multiband-Kompressor zum Reduzieren von Zischlauten in der Stimme)
- **[ReaEQ](#ReaEQ)** (Multiband EQ mit verschiedenen Presets, etwa auch „Telefon-Sound"
- **[Ambience](#Ambience)** (Ein Raumsimulator mit verschiedenen Presets, etwa Studio oder Kirche)
- **[Ultraschall Dynamics 2](#Ultraschall-Dynamics-2)** (Anpassung der Lautheit eines Tracks, Redzierung von Hintergrundgeräuschen und Expander)

Im Plug-in-Verzeichnis "Best of Breed" findest du außerdem [einige weitere freie, aber sehr leistungsstarke Effekte](#Weitere-empfehlenswerte-Efekte-und-Plug-Ins):

- **[ReEQ](#ReEQ)** (Equalizer, der an den bekannten _Fabfilter_ angelehnt ist)
- **[Smooth Limiter](#Smooth-Limiter)** (Limiter der Extraklasse, der sehr anschaulich den Grad des Eingreifens visualisiert und auch im neuen LUFS Loudness Metering Effekt verbaut ist - pures Audio-Gold)
- **[Spectrum Matcher](#Spectrum-Matcher)** (EQ mit Lernfunktion, um den Klang von Mikros aneinander anzupassen)
- **[TriLeveler2](#TriLeveler2)** (Gute Alternative zu unserem Dynamics 2 Effekt)
- **[ReaXcomp](#ReaXcomp)** (Grafischer Multiband-Kompressor der Spitzenklasse)

Trotz der vielfältigen Möglichkeiten, Aufnahmen nachträglich aufzupeppen, gilt die alte Audio-Weisheit: **Garbage in, Garbage out.** Haben Aufnahmen zu viel Echo, Störgeräusche, Aussetzer, Brummen, Crosstalk oder von einem der anderen unzähligen möglichen störenden Einflüsse, dann ist auch von der Post-Produktion nur begrenzt Verbesserung zu erwarten. Bei jedem Effekt-Plug-in führt ein "zu viel" schnell zu unnatürlichem Klang. Das A und O für eine erfolgreiche Post-Produktion sind daher sorgfältige und gute Aufnahmen.

# Ultraschall AMP (Automated Mixing Pipeline)

Die automated Mixing Pipeline ist eine unkomplizierte und kostenlose Alternative zu Online-Audioverbesserungsdiensten wie Auphonic. Mit den sinnvollen _Voreinstellungen_ erreichst du in den meisten Fällen ein direkt veröffentlichbares, toll klingendes Ergebnis - ganz ohne Audioerfahrung oder "Goldohren". Ultraschall gibt dir allerdings auch ausreichend Möglichkeiten, passend zu deiner individuellen Situation feinzujustieren.

Im `Podcast`-Menü unter `Workflows`->`Ultraschall AMP - Automated Mixing Pipeline` findest du die einzelnen Schritte. Die ausgegrauten Menüeinträge sind nur für dich als Gedankenstütze gedacht, die dort erwähnten Schritte musst du aber "manuell" abarbeiten. Ein Auslassen von Schritten oder ein Ändern der Reihenfolge führt zu schlechten Ergebnissen, gehe daher den Workflow strikt der Reihe nach durch.

![Ultraschall AMP – Automated Mixing Pipeline](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Post-Produktion/amp-menu-entry.png "Ultraschall AMP – Automated Mixing Pipeline") **Screenshot:** _Ultraschall AMP – Automated Mixing Pipeline_

Die einzelnen Schritte der AMP sind der Reihe nach:

**Step 1: Select all items for mixing** Wähle alle Items auf allen Spuren im [Timeline-Bereich [25]](GUI-Gesamtuebersicht) aus, die du durch die Mixing Pipeline verbessern lassen willst. In den meisten Fällen sind das alle Items (zur Erinnerung: Items sind die einzelnen Blöcke auf deinen Spuren) in deinem Projekt – dazu klickst du irgendwo in den [Spuren-Bereich [23]](GUI-Gesamtuebersicht) und wählst `CTRL + A` beziehungsweise `CMD + A`, um alle zu selektieren. Alternativ wählst du im Menü `Item`->`Select all`.

Achtung: Der AMP ist für **Sprachspuren** konzipiert. Spuren mit Einspielern, vor allem Musik, sollten **nicht** durch den AMP laufen sondern am Ende nach Gehör dazugemischt werden.

Um schnell alle Items einer Spur auszuwählen, mache einen `Doppelklick` links auf den grauen Bereich über oder unter dem Spurnamen.

**Step 2: Normalize loudness of selected items to -23 LUFS** Diesen Schritt kannst du im Menü `Podcast`->`Workflows`->`Ultraschall AMP - Automated Mixing Pipeline` direkt anwählen. Ultraschall [normalisiert](#Normalisieren) dir dann automatisch alle in Schritt 1 ausgewählten Items auf -23 LUFS. Das ist zwar zu leise für die eigentliche Publikation, aber die perfekte Grundlage für die folgenden Schritte.

**Step 3: Select tracks for the AMP** Wähle jetzt alle Spuren im [Spuren-Bereich [23]](GUI-Gesamtuebersicht) aus, die in der Mixing Pipeline berücksichtig werden sollen. Einzelne Spuren wählst du einfach mit einem Klick in den grauen Bereich oberhalb oder unterhalb der Spur-Namensfeldes. Um mehrere Spuren auszuwählen, hältst du beim Klicken die `CTRL`- beziehungsweise die `CMD`-Taste gedrückt.

**Step 4: Set AMP (Automated Mixing Pipeline) FX on selected tracks (Ultraschall)** Diesen Schritt kannst du im Menü `Podcast`->`Workflows`->`Ultraschall AMP - Automated Mixing Pipeline` direkt anwählen. Danach solltest du auf jeder der vorab ausgewählten Spuren einen aktivierten "JS: Ultraschall Dynamics (Ultraschall)-Effekt" vorfinden. Der gleicht die Lautheit der Tracks auf -20 LUFS an.

**Step 5: Choose LUFS Target on Master FX (16 LUFS for Podcasting)** Der Master-Track wird im vorigen Schritt per Spur-Effekt auf die im Podcast-Bereich üblichen -16 LUFS angehoben. Du kannst diesen Zielwert auch ändern, die entsprechende Einstellung findest du im FX-Bereich des Master-Tracks.

## Korrekturmöglichkeiten

Sollte das Endergebnis nicht überzeugend klingen, ist vermutlich der Signal-Rauschabstand einzelner Spuren problematisch - sprich es wird Rauschen oder Hall verstärkt anstatt abgesenkt. Dies kann pro Spur optimiert werden, indem der `Noisefloor` Regler verschoben wird - solange, bis die Stimme laut bleibt, Störgeräusche aber abgesenkt werden:

![Ultraschall Dynamics Noisefloor](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Post-Produktion/Ultrasschall_Dynamics.png) **Screenshot:** _Ultraschall Dynamics - Noisefloor_ <!-- @todo: Bild auf Github verschieben -->

Den genauen Ablauf des AMP zeigt dieses Video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/vdLpynu1ixE?start=2877" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
</iframe>

# Post-Produktion für Fortgeschrittene

## Vorausgewählte Effekte und Plug-ins

### DeNoise

(der ReaFir Rauschfilter zum Anlernen von Rauschprofilen)

### DeEsser

(ein Multiband-Kompressor zum Reduzieren von Zischlauten)

### ReaEQ

(Multiband EQ mit verschiedenen Presets, etwa auch „Telefon-Sound"

### Ambience

(Ein Raumsimulator mit verschiedenen Presets, etwa Studio oder Kirche)

### Ultraschall Dynamics 2

(Anpassung der Lautheit eines Tracks und Expander)

## Weitere empfehlenswerte Efekte und Plug-Ins

<iframe width="560" height="315" src="https://www.youtube.com/embed/vdLpynu1ixE?start=3678" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
</iframe>

### ReEQ

(Equalizer, der an Fabfilter angelehnt ist)

### Smooth Limiter

(Limiter der Extraklasse, der sehr anschaulich den Grad des Eingreifens visualisiert und auch im neuen LUFS Loudness Metering Effekt verbaut ist - pures Audio-Gold)

### Spectrum Matcher

(EQ mit Lernfunktion, um den Klang von Mikros aneinander anzupassen)

### TriLeveler2

(Gute Alternative zu unserem Dynamics 2 Effekt)

### ReaXcomp

(Grafischer Multiband-Kompressor der Spitzenklasse)

## Normalisieren

### Technik-Exkurs

Als [Normalisierung](https://de.wikipedia.org/wiki/Normalisierung_(Audio)) wird in der Audiotechnik der Vorgang bezeichnet, die Amplitude analogen oder digitalen Audiomaterials so zu vergrößern oder zu verkleinern, dass sie innerhalb eines vorgegebenen Bereichs liegt. .

Die Lautstärke ist objektiv messbar. Dafür wird Maßeinheit "Dezibel" dB verwendet. Das Problem ist, dass selbst bei gleich gemessener Lautstärke verschiedene Sounds unterschiedlich laut empfunden werden, daher wird das Signal gewichtet und die Einheit dbA verwedet. Hierbei wird der Schalldruckpegel entsprechend des Höhrempfinden gewichtet [siehe auch Wikipedia](https://de.wikipedia.org/wiki/Bel_(Einheit)#Verwendung_mit_anderen_Maßeinheiten,_Anhängsel).

Diese (gewichtete) subjektive Größe gibt aber nicht immer genügend Informationen. Daher hat man sich auf [LUFS](https://de.wikipedia.org/wiki/EBU-Empfehlung_R_128). (Loudness Units relative to Full Scale oder in deutsch Lautstärke-Einheiten in Relation zur Vollskala) als Maßeinheit geeinigt. Es handelt sich um eine normierte Messung der Lautstärke

Das Ziel der Einheit LUFS ist es die menschliche Wahrnehmung und elektrische Signalintensität zusammenrechnen. Der Unterschied vom LUFS- zum bisher üblichen RMS-Verfahren besteht nur darin, dass bei der Lautheit nach [MRS](https://de.wikipedia.org/wiki/Quadratisches_Mittel) der gesamte Frequenzbereich gleichwertig berücksichtigt werden, bei LUFS allerdings die einzelnen Frequenzen speziell gewichtet werden.

Je nach Verwendungszweck haben sich unterschiedliche LUFS Werte durchgesetzt. Bei Podcasts wird meist -16 LUFS verwendet. Beim Rundfunk werden -23 LUFS empfohlen. Diese Einstellung ist aber bei Podcasts meist zu leise.

Die Standard-Einstellung bei Ultraschall (für die entgültige Audiodatei) ist daher auf <!-- @todo: Link stimmt nicht --> [-16 LUFS](https://pad.gwdg.de/#Ultraschall-AMP-Automated-Mixing-Pipeline) eingestellt. Die in der Aufnahmekette vorher verwendeten LUF-Werte sollten darunter liegen.

#### Die Normalisierung mit dem _Ultraschall Dynamics 2 Effekt_

Der _Ultraschall Dynamics 2 Effek_ ermöglicht eine Anhebung der durchschnittlichen Lautstärke auf die für Podcasts empfohlenen -16 LUFS (oder einen anderen Wert) für alle Audiospuren.

##### Wie aktiviert man den Effekt, wenn er im Effektbereich nicht auftaucht?

Bei allen neu angelegten Spuren wird der Effekt wie oben beschrieben bereits eingerichtet, aber noch noch nicht aktiviert.

Bei alten Projekten wird der Effekt hingegen erst einmal fehlen. So könnt ihr ihn manuell hinzufügen: wählt unten im Effekt-Fenster den Add Button aus. Es öffnet sich ein Fenster mit allen in REAPER/Ultraschall verfügbaren Effekten. Voreingestellt sollte hier bereits im linken Bereich `Favorites` sein. Rechts findet man dann schnell den `JS: Ultraschall Dynamics` Effekt und kann kann ihn mit OK hinzufügen. Er ist dann auch direkt aktiviert.

Hier das Video:

![Effekt aktivieren](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Post-Produktion/LUFS_002.gif) **Ultraschall Dynamics:** _Aktivierung des Effects_

#### Einstellung für die Normalisierung

Die Einstellung für das normaliseren auf -23 LUFS aller Quellen für die Aufnahme ("_Normalize loudness of selected items to -23 LUFS_") wird im Plugin "JS: Ultraschall Dynamics (Ultraschall.fm)" mit dem Regler _Target (LUFS)_ vorgenommen. Die voreingestellten Werte müssen sind ind der Regel gut.

![Ultraschall Dynamics Target](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Post-Produktion/ULDynamics.jpg) **Ultraschall Dynamics:** _Die Einstellung für die finale Normalisierung lässt sich mit dem Plugin "_JS: LUFS Loudnessmeter_" verändern._

Die Einstellung für die finale Normalisierung lässt sich mit dem Plugin "_JS: LUFS Loudnessmeter_" verändern.

![-16 LUFS](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Post-Produktion/minus16LUFS-1.gif) **Ultraschall Dynamics:** _Auch hier ist es in den aller meisten Fällen nicht notwendig die Einstellugen zu verändern._

Auch hier ist es in den aller meisten Fällen nicht notwendig die Einstellugen zu verändern.

## Hall-Reduktion

<!-- @todo: Entscheidung: Noch nicht bearbeitet. Vielleicht sollten wir das in die FAQ Sektion übernehmen und hier nicht bearbeiten. -->

## Rauschen entfernen

### Der _Ultraschall Dynamics 2 Effek für Rauschreduktion_

Der _Ultraschall Dynamics 2 Effek_ beinhaltet ìn einstellbares, weiches Noisegate - so dass man pro Mikrophon bzw. SprecherIn einstellen kann, was noch verstärkenswertes Signal ist (etwa leise gesprochene Worte) und was hingegen unerwünschte Störgeräusche (etwa Atmen)

### Den Einsatz des Noisegates (Noisefloor) anpassen

Dieser Regler hat den größten Einfluss auf die Lautstärke: er legt fest, ab welcher Grenze ein Signal als zu verstärkender Inhalt oder aber als abzusenkendes Rauschen oder sonstiges Störsignal behandelt wird. Die Kunst besteht nun darin, für jede Spur den Wert zu finden, dass leise Sprache verstärkt wird, jedoch Atmen (Vadern) nicht verstärkt wird sondern bestenfalls sogar abgesenkt wird. Der voreingestellte Wert orientiert sich an einem guten Headset (DT297 / HMC660) das konservativ ausgesteuert wurde bei der Aufnahme (in einem Bereich von -6 bis -12 dB). Das ist aber nur ein erster Startpunkt, es lohnt fast immer hier nachzubessern.

Dabei geht man wie folgt vor: man sucht sich in der Spur eine Passage raus, in der sowohl Stille (eventuell mit Rauschen), als auch Atmen, als auch leise Sprache, als auch normale Sprache vorkommt. Ist vielleicht nicht immer so zu finden, aber so eine Passage von vielleicht 30 Sekunden ist perfekt. Über diese Passage setzt man mit dem Auswahlwerkzeug eine Zeitauswahl, schaltet in den Repeat Modus, schaltet den Track auf Solo so dass alle anderen Spuren verstummen, und spielt ihn in der Schleife endlos ab. Nun hört man sich das Audio genau an, und beginnt den Regler hin und her zu schieben - gern auch erst mal in die Extreme, damit man ein Gespür für die Wirkungsweise bekommt. Dann optimiert man solange, bis man den besten Punkt gefunden hat.

Das klappt nur, wenn man während der Aufnahme nichts am Gain der Aufnahme verändert hat - sollte das passiert sein, also etwa die erste Stunde sehr leise und die zweite sehr laut aufgezeichnet worden sein, wird es komplizierter und man sollte vielleicht besser Auphonic nehmen (der Ansatz wäre hier: den Clip teilen an der Stelle, an der die Lautstärke verändert wurde, und dann entweder den zweiten Bereich in eine neue Spur schieben die man mit anders eingestelltem Effekt versieht, oder aber die Effekte gar nicht auf die Spur anzuwenden sondern auf die einzelnen Items).

Hier das Video: <!-- @todo gif mit US 3.1 das müssen wir neu machen -->

![Noisegate anpassen](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Post-Produktion/LUFS_004.gif) **Ultraschall Dynamics:** _Ändern der Schwelle für das Rauschen (Rauschunterdrückung)_" verändern.*
