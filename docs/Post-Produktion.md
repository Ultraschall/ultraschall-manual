---
id: postproduction
title: Post-Produktion
tags:
  - produktion
  - fx
  - workflow
lektorat:
    - Lektorat: 27.4.2022 bzw. 4.5.2022 @MirUnauffaellig
    - Schlusskorrektur: 6.7.2022 @MirUnauffaellig
---

<!-- Tags für Docusaurus -->
<!-- @todo: eventuell in zwei Kapitel aufteilen -->

## Einleitung

Dein Podcast ist aufgenommen und geschnitten? Dann ist jetzt Zeit für die Post-Produktion. Das Ziel in diesem Kapitel ist es, den Klang deines Podcasts zu verbessern – selbst wenn er vielleicht ohnehin schon gut klingt. Hier lernst du, welche Effekte Ultraschall mitbringt und wie du diese einsetzt.

:::info Info
Zu diesem Thema gibt es ein sehr gutes [Tutorial-Video](#video).
:::

## Warum Post-Produktion sinnvoll ist – und wo die Grenzen liegen

Eines gleich vorweg: Je besser deine Aufnahme, desto weniger Arbeit hast du damit in der Post-Produktion. Es lohnt sich also, von vorneherein auf Umgebungs- und Störgeräusche zu achten, Netzbrummen zu eliminieren, Sprechabstände und Aufnahmepegel feinzujustieren und insgesamt darauf zu achten, bestmögliche Aufnahmebedingungen herzustellen. Trotzdem ist für ein optimales Ergebnis Post-Produktion immer wichtig und sinnvoll.

Die Ziele der Post-Produktion sind (in absteigender Relevanz):

1. **Mischen der einzelnen Spuren**: Verschiedene Stimmen und Einspieler klingen in der Aufnahme unterschiedlich laut. Im Mix werden diese Unterschiede zugunsten eines harmonischen Ganzen verringert.
2. **Anheben der Lautheit des Podcasts auf -16 LUFS (oder eines anderen Wunschwertes)**: Podcasts werden in sehr unterschiedlichen Umgebungen gehört - nicht nur zu Hause, sondern etwa auch in der U-Bahn. Damit alles gut verstanden werden kann, muss der gesamte Mix eine gewisse Lautstärke aufweisen. -16 LUFS hat sich hier in Podcast-Kreisen etabliert.
3. **Reduzieren von Störungen**: Je nach Aufnahmesituation enthalten die Spuren mehr oder weniger Störanteile – wie Rauschen, Raumklang, Echo, Übersprechen von anderen Mikrofonen oder Netzbrummen. Diese Misstöne lassen sich mit überschaubarem Aufwand zumindest teilweise reduzieren.
4. **Optimieren des Klangbilds**: Je nach Geschmack sorgen weitere Klangformungen, etwa mit Hilfe eines Equalizers (EQ), für das gewünschte klangliche Ergebnis.

Ultraschall lässt dir freie Hand und gibt dir alle Möglichkeiten für eine manuelle Post-Produktion – nimmt dich bei Bedarf aber über die _Automated Mixing Pipeline (AMP)_ auch an die Hand und führt dich durch die wichtigsten Schritte (siehe auch Abschnitt [Automated Mixing Pipeline (AMP)](#Ultraschall-AMP-Automated-Mixing-Pipeline)).

Außerdem bietet dir Ultraschall von Haus aus für jede Spur eine sinnvolle [Vorauswahl an Effekten](#Vorausgew%C3%A4hlte-Effekte-und-Plug-ins); du findest sie rechts unten im [Filter-Bereich [26]](GUI-overview), nachdem du im [Mixer-Bereich [24]](GUI-overview) auf der gewünschten Spur auf die `FX`-Schaltfläche drückst:

* **DeNoise** (ReaFir-Rauschfilter zur Reduzierung von Rauschen oder Brummen mittels Anlernen von Störungsprofilen)

* **DeEsser** (Multiband-Kompressor zum Reduzieren von Zischlauten in der Stimme)

* **ReaEQ** (Multiband-Equalizer mit verschiedenen Presets – etwa auch "Telefon-Sound")

* **Ambience** (Raumsimulator mit verschiedenen Presets – etwa Studio oder Kirche)

* **Ultraschall Dynamics 2** (Anpassung der Lautheit eines Tracks, Reduzierung von Hintergrundgeräuschen und Expander)

Im Plug-in-Verzeichnis "Best of Breed" findest du außerdem einige weitere freie, aber sehr leistungsstarke Effekte:

* **ReEQ** (Equalizer, der an den bekannten _Fabfilter_ angelehnt ist)

* **Smooth Limiter** (Limiter der Extraklasse, der sehr anschaulich den Grad des Eingreifens visualisiert und auch im neuen LUFS-Loudness-Metering-Effekt verbaut ist - pures Audio-Gold)

* **Spectrum Matcher** (EQ mit Lernfunktion, um den Klang von Mikros aneinander anzupassen)

* **TriLeveler2** (gute Alternative zu unserem Dynamics-2-Effekt)

* **ReaXcomp** (grafischer Multiband-Kompressor der Spitzenklasse)

Trotz der vielfältigen Möglichkeiten, Aufnahmen nachträglich aufzupeppen, gilt die alte Audio-Weisheit: _Garbage in, Garbage out._ Haben Aufnahmen zu viel Echo, Störgeräusche, Aussetzer, Brummen, Crosstalk oder einen der anderen unzähligen möglichen störenden Einflüsse, dann ist auch von der Post-Produktion nur begrenzt Verbesserung zu erwarten. Bei jedem Effekt-Plug-in führt ein "zu viel" schnell zu unnatürlichem Klang. Das A und O für die erfolgreiche Post-Produktion sind daher sorgfältige und gute Aufnahmen.

## Ultraschall AMP (Automated Mixing Pipeline)

Die Automated Mixing Pipeline ist eine unkomplizierte und kostenlose Alternative zu Online-Audioverbesserungsdiensten wie [Auphonic](https://auphonic.com/). Mit den sinnvollen _Voreinstellungen_ erreichst du in den meisten Fällen ein toll klingendes Ergebnis - ganz ohne Audioerfahrung oder "Goldohren". Ultraschall gibt dir allerdings auch ausreichend Möglichkeiten, passend zu deiner individuellen Situation feinzujustieren.

Im `Podcast`-Menü unter `Workflows`>`Ultraschall AMP - Automated Mixing Pipeline` findest du die einzelnen Schritte. Die ausgegrauten Menüeinträge sind nur für dich als Gedankenstütze gedacht; die dort erwähnten Schritte musst du "manuell" abarbeiten. Ein Auslassen von Schritten oder ein Ändern der Reihenfolge führt zu schlechten Ergebnissen; geh daher den Workflow strikt der Reihe nach durch.

![Ultraschall AMP – Automated Mixing Pipeline](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Post-Produktion/amp-menu-entry.png "Ultraschall AMP – Automated Mixing Pipeline") **Ultraschall AMP:** _Die Automated Mixing Pipeline vereinfacht dir viele komplexe Schritte der Post-Produktion._

Die einzelnen Schritte der AMP sind der Reihe nach:

**Step 1: Select all items for mixing**: Wähl alle Items auf allen Spuren im [Timeline-Bereich [25]](GUI-overview) aus, die du durch die Mixing Pipeline verbessern lassen willst. In den meisten Fällen sind das alle Items (zur Erinnerung: Items sind die einzelnen Blöcke auf deinen Spuren) in deinem Projekt – dazu klickst du irgendwo in den [Spuren-Bereich [23]](GUI-overview) und wählst <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>A</kbd>, um alle zu selektieren. Alternativ wählst du im Menü `Item`>`Select all`.

:::danger Achtung!
Der AMP ist für **Sprachspuren** konzipiert. Spuren mit Einspielern (vor allem Musik) sollten den AMP _nicht_ durchlaufen, sondern am Ende nach Gehör dazugemischt werden.
:::

Um schnell alle Items einer Spur auszuwählen, mach einen `Doppelklick` links auf den grauen Bereich über oder unter dem jeweiligen Spurnamen.

**Step 2: Normalize loudness of selected items to -23 LUFS**: Diesen Schritt wählst du direkt im Menü `Podcast`>`Workflows`>`Ultraschall AMP - Automated Mixing Pipeline`. Ultraschall [normalisiert](#Normalisieren) dir dann automatisch alle in Schritt 1 ausgewählten Items auf -23 LUFS. Das ist zwar zu leise für die eigentliche Publikation, aber die perfekte Grundlage für die folgenden Schritte. Das Tastenkürzel hierfür ist <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>N</kbd>.

**Step 3: Select tracks for the AMP**: Wähl jetzt alle Spuren im [Spuren-Bereich [23]](GUI-overview) aus, die in der Mixing Pipeline berücksichtigt werden sollen. Einzelne Spuren wählst du einfach mit einem Klick in den grauen Bereich oberhalb oder unterhalb des Spur-Namensfeldes. Um mehrere Spuren auszuwählen, hältst du beim Klicken die <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>-Taste gedrückt.

**Step 4: Set AMP (Automated Mixing Pipeline) FX on selected tracks (Ultraschall)**: Auch diesen Schritt wählst du direkt im Menü `Podcast`>`Workflows`>`Ultraschall AMP - Automated Mixing Pipeline` an. Danach solltest du auf jeder der vorab ausgewählten Spuren einen aktivierten "JS: Ultraschall Dynamics (Ultraschall)"-Effekt vorfinden. Der gleicht die Lautheit deiner Tracks auf -20 LUFS an.

**Step 5: Choose LUFS Target on Master FX (16 LUFS for Podcasting)**: Der Master-Track wird im vorigen Schritt per Spur-Effekt auf die im Podcast-Bereich üblichen -16 LUFS angehoben. Du kannst diesen Zielwert auch ändern; die entsprechende Einstellung findest du im FX-Bereich des Master-Tracks.

## Korrekturmöglichkeiten

Sollte das Endergebnis nicht überzeugend klingen, ist vermutlich der Signal-Rauschabstand einzelner Spuren problematisch - sprich: Es wird Rauschen oder Hall verstärkt statt abgesenkt. Das kannst du für jede Spur einzeln beheben, indem du den jeweiligen `Noisefloor`-Regler verschiebst - solange, bis die Stimme zwar laut bleibt, Störgeräusche aber verschwinden:

![Ultraschall Dynamics Noisefloor](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Post-Produktion/Ultrasschall_Dynamics.png) **Ultraschall Dynamics - Noisefloor**: _Der Noisefloor bestimmt den Signal-Rauschabstand der zugehörigen Spur._

**Den genauen Ablauf des AMP zeigt dieses Video:**
<iframe width="560" height="315" src="https://ultraschall.github.io/ultraschall-manual/youtube/?url=vdLpynu1ixE?start=2877" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen">
</iframe>

## Post-Produktion für Fortgeschrittene

<!-- todo: hier fehlt es noch an Inhalten – in der aktuellen Form ist das 1 zu 1, was oben schon steht.

### Vorausgewählte Effekte und Plug-ins

#### DeNoise

(ReaFir-Rauschfilter zum Anlernen von Rauschprofilen)

#### DeEsser

(Multiband-Kompressor zum Reduzieren von Zischlauten)

#### ReaEQ

(Multiband EQ mit verschiedenen Presets, etwa auch „Telefon-Sound"

#### Ambience

(Ein Raumsimulator mit verschiedenen Presets, etwa Studio oder Kirche)

#### Ultraschall Dynamics 2

(Anpassung der Lautheit eines Tracks und Expander)

### Weitere empfehlenswerte Efekte und Plug-Ins

<iframe width="560" height="315" src="https://www.youtube.com/embed/vdLpynu1ixE?start=3678" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
</iframe>

#### ReEQ

(Equalizer, der an Fabfilter angelehnt ist)

#### Smooth Limiter

(Limiter der Extraklasse, der sehr anschaulich den Grad des Eingreifens visualisiert und auch im neuen LUFS Loudness Metering Effekt verbaut ist - pures Audio-Gold)

#### Spectrum Matcher

(EQ mit Lernfunktion, um den Klang von Mikros aneinander anzupassen)

#### TriLeveler2

(Gute Alternative zu unserem Dynamics 2 Effekt)

#### ReaXcomp

(Grafischer Multiband-Kompressor der Spitzenklasse)
-->

### Normalisieren

#### Technik-Exkurs

Als [Normalisierung](https://de.wikipedia.org/wiki/Normalisierung_(Audio)) wird in der Audiotechnik der Vorgang bezeichnet, die Amplitude analogen oder digitalen Audiomaterials mit konstantem Gain so zu vergrößern oder verkleinern, dass das Ergebnis innerhalb eines vorgegebenen Bereichs liegt.

Die Lautstärke ist objektiv messbar. Die Maßeinheit dafür ist "Dezibel", das Einheitenzeichen "dB". Das Problem ist, dass selbst bei gleich gemessener Lautstärke verschiedene Sounds unterschiedlich laut empfunden werden; daher wird das Signal gewichtet und die Einheit "dbA" verwendet. Dazu wird der Schalldruckpegel entsprechend des Hörempfindens gewichtet – [siehe auch Wikipedia](https://de.wikipedia.org/wiki/Bel_(Einheit)#Verwendung_mit_anderen_Ma%C3%9Feinheiten,_Zus%C3%A4tze).

Diese (gewichtete) subjektive Größe liefert aber nicht immer genügend Informationen; daher hat sich [LUFS](https://de.wikipedia.org/wiki/EBU-Empfehlung_R_128). ("Loudness Units relative to Full Scale" beziehungsweise "Lautstärke-Einheiten in Relation zur Vollskala") als Maßeinheit durchgesetzt. Sie beziffert eine normierte Messung der Lautstärke.

Um die Lautheit in LUFS zu ermitteln, wird die menschliche Wahrnehmung und die elektrische Signalintensität zusammengerechnet. Der Unterschied zwischen dem LUFS- und dem bisher üblichen RMS-Verfahren besteht nur darin, dass bei der Lautheit nach [RMS](https://de.wikipedia.org/wiki/Quadratisches_Mittel) der gesamte Frequenzbereich gleichwertig berücksichtigt wird, bei LUFS allerdings die einzelnen Frequenzen individuell gewichtet werden.

Je nach Verwendungszweck sind unterschiedliche LUFS-Werte sinnvoll. Im Rundfunk etwa haben sich -23 LUFS als Standard durchgesetzt. Weil das für Podcasts aber oft zu leise erscheint, produzieren viele Podcastende auf einen Zielwert von -16 LUFS. Ultraschall ist ebenfalls auf [-16 LUFS](#ultraschall-amp-automated-mixing-pipeline) als Zielwert für die final gerenderte Audiodatei eingestellt. Die in der Aufnahmekette vorher verwendeten LUFS-Werte sollten stets darunter liegen.

#### Normalisierung mit dem _Ultraschall Dynamics 2_-Effekt

Der `Ultraschall Dynamics 2`-Effekt ermöglicht es, die durchschnittliche Lautstärke aller Audiospuren auf die für Podcasts empfohlenen -16 LUFS (oder einen anderen Wert) anzuheben.

#### Wie aktivierst du den Effekt, falls er im Effektbereich der gewünschten Spur nicht auftaucht?

Bei allen neu angelegten Spuren sollte der Effekt wie oben beschrieben bereits eingerichtet, aber noch noch nicht aktiviert sein. Bei älteren Projekten fehlt er hingegen in den meisten Fällen. in diesem Fall fügst du ihn einfach manuell hinzu: Wähl unten im Effekt-Fenster die `Add`-Schaltfläche. Im erscheinenden Fenster sind alle in REAPER/Ultraschall verfügbaren Effekte aufgelistet. Im linken Bereich haben wir einige für Podcasts sinnvolle Effekte als `Favorites` markiert. Klick auf diesen Menüpunkt, wähl rechts den `JS: Ultraschall Dynamics`-Effekt und bestätige mit `OK` – schon landet der Effekt (bereits aktiviert) auf der ausgewählten Spur.

**Hier eine Videoerklärung dazu:**
![Effekt aktivieren](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Post-Produktion/LUFS_002.gif) **Ultraschall Dynamics:** _So aktivierst du einen Effekt auf einer Audiospur._

#### Einstellungen für die Normalisierung

Um alle Quellen in deiner Aufnahme auf -23 LUFS zu normalisieren, selektierst du einfach alle Items und wählst den Eintrag `Workflows`>`Ultraschall AMP - Automated Mixing Pipeline`>`Step 2: Normalize loudness of selected items to -23 LUFS` aus dem `Podcast`-Menü.

Alternativ, oder um einen anderen Zielwert als -23 LUFS zu verwenden, veränderst du den entsprechenden Regler `Target (LUFS)` im Effekt-Plugin `JS: Ultraschall Dynamics (Ultraschall.fm)`. Für die meisten Fälle ist der voreingestellte Wert aber ideal.

![Ultraschall Dynamics Target](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Post-Produktion/ULDynamics.jpg) **Ultraschall Dynamics:** _Hier legst du gegebenenfalls einen individuellen Wert für die LUFS deiner ausgewählten Audiospur fest._

Die Einstellung für die Normalisierung des finalen Audiomix'  nimmst du über das Effekt-Plugin `JS: LUFS_Loudness_Meter` auf der Master-Spur vor.

![-16 LUFS](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Post-Produktion/minus16LUFS-1.gif) **Ultraschall Dynamics:** _Auch hier ist es in den aller meisten Fällen nicht notwendig die Einstellungen zu verändern._

<!-- ### Hall-Reduktion -->

<!-- @todo: Entscheidung: Noch nicht bearbeitet. Vielleicht sollten wir das in die FAQ Sektion übernehmen und hier nicht bearbeiten. -->

### Rauschen entfernen mit dem _Ultraschall Dynamics 2_-Effekt

Der `Ultraschall Dynamics 2`-Effekt beinhaltet unter anderem ein einstellbares, weiches Noisegate - das dir dabei hilft, auf deinen Spuren Störgeräusche und Sprache voneinander abzugrenzen.

Der `Noisefloor`-Regler hat dabei den größten Einfluss auf die Lautstärke: Hierüber legst du fest, ab welcher Grenze ein Signal als zu verstärkender Inhalt oder aber als zu dämpfendes Rauschen oder Störsignal behandelt wird. Die Kunst besteht darin, für jede Spur exakt die Einstellung zu finden, bei der selbst leise Gesprochenes noch verstärkt, Rauschen und Atmen (Vadern) hingegen aber abgesenkt werden. Der vorgeschlagene Wert passt in der Regel für ein gutes Headset wie das DT297 oder das HMC660, die bei der Aufnahme konservativ ausgesteuert wurden (in einem Bereich von -6 bis -12 dB). Das ist aber nur ein Startpunkt; es lohnt sich fast immer, hier noch feinzujustieren.

Dabei gehst du wie folgt vor: Du suchst dir in der betreffenden Spur eine Passage raus, in der sowohl Stille (gegebenenfalls mit Rauschen und Atmen) als auch leise sowie normal laute Sprache vorkommen. Das mag vielleicht nicht immer so einfach zu finden sein; du brauchst für ein gutes Ergebnis aber auch nicht mehr als eine Passage von vielleicht 30 Sekunden. Über diesen Abschnitt setzt du per Auswahlwerkzeug eine Zeitauswahl, schaltest in den `Repeat`-Modus und die Spur auf `Solo`, sodass die Passage nur auf der gewünschten Spur und in einer Endlosschleife abgespielt wird. Nun hörst du ganz genau hin und beginnst dann, den Regler etwas hin- und herzuschieben - gerne auch erst einmal etwas stärker, damit du ein Gefühl für die Veränderung und die Wirkungsweise bekommst. Anschließend optimierst du solange, bis du mit dem Ergebnis zufrieden bist.

Das klappt aber nur, wenn du während der Aufnahme nicht am Gain-Regler gedreht hast. Hast du während der Aufnahme den Eingangspegel verändert – und hast beispielsweise zu Beginn sehr leise, später dann eher laut aufgenommen – , wird das Abmischen etwas komplizierter. Entweder teilst du die Spur an der entsprechenden Stelle auf zwei Spuren mit jeweils individuellen Effekteinstellungen auf oder du greifst zu einem automatischen Klangverbesserungsdienst wie [Auphonic](https://auphonic.com/).

**Hier auch ein Video dazu:** <!-- @todo gif mit US 3.1 das müssen wir neu machen -->
![Noisegate anpassen](https://raw.githubusercontent.com/Ultraschall/ultraschall-manual/main/assets/images/Post-Produktion/LUFS_004.gif) **Ultraschall Dynamics:** _So veränderst du die Schwelle für die Rauschunterdrückung)._

## Video
<div class="youTubeContainer">
<iframe src="https://ultraschall.github.io/ultraschall-manual/youtube/?url=xqTbFouO6F8" title="YouTube video player"
frameborder="0" allowfullscreen="allowfullscreen"  class="video"></iframe>
</div>
