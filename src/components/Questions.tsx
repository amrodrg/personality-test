import QuestionComponent from './QuestionComponent';


const Questions = () => {
  return (
    <div className="flex flex-col">


      <QuestionComponent question={'1. Es liegt mir eher,'}
        options={{first: 'wenn man mir etwas durch die Blume sagt.', firstType: 'F', second: 'wenn man „das Kind beim Namen nennt“.', secondType: 'D'}}
      />

      <QuestionComponent question={'2.'}
        options={{first: 'Ich denke manchmal lange nach und sage dann trotzdem nichts.', firstType: 'I', second: 'Ich rede manchmal schneller als ich denke.', secondType: 'E'}}
      />

      <QuestionComponent question={'3. Langfristige Pläne geben mir das Gefühl,'}
        options={{first: 'in einer Zwangsjacke zu stecken.', firstType: 'W', second: 'alles im Griff zu haben.“.', secondType: 'B'}}
      />

      <QuestionComponent question={'4. Arbeiten, die Geduld und Sorgfalt erfordern, '}
        options={{first: 'sind für mich eher eine Quälerei.', firstType: 'In', second: 'machen mir meistens Spaß.', secondType: 'S'}}
      />



      <QuestionComponent question={'5. Ich neige eher dazu, '}
        options={{first: 'ehrlich meine Meinung zu sagen.', firstType: 'D', second: 'auf Harmonie und Ausgleich bedacht zu sein.', secondType: 'F'}}
      />

      <QuestionComponent question={'6. Für mich gilt eher: '}
        options={{first: 'Arbeit und Freizeit sind bei mir nicht so klar voneinander getrennt.', firstType: 'W', second: 'Erst die Arbeit, dann das Vergnügen.', secondType: 'B'}}
      />

      <QuestionComponent question={'7. Wenn ich eine Entscheidung zu treffen habe, höre ich im Zweifelsfall auf '}
        options={{first: 'meinen Bauch.', firstType: 'F', second: 'meinen Verstand.', secondType: 'D'}}
      />

      <QuestionComponent question={'8. Wenn ich bastle oder handwerke, '}
        options={{first: 'tue ich dies sorgfältig und genau.', firstType: 'S', second: 'tue ich dies eher „Pi mal Daumen“.', secondType: 'In'}}
      />



      <QuestionComponent question={'9. Wenn ich mich entscheiden müsste, würde ich mich eher bezeichnen als '}
        options={{first: 'Realisten.', firstType: 'S', second: 'Idealisten.', secondType: 'In'}}
      />

      <QuestionComponent question={'10. '}
        options={{first: 'Bei mir hat alles seinen Platz.', firstType: 'B', second: 'Bei mir herrscht eher „kreatives Chaos".', secondType: 'W'}}
      />

      <QuestionComponent question={'11. Meiner Meinung nach ist die größere Tugend '}
        options={{first: 'Direktheit.', firstType: 'D', second: 'Taktgefühl.', secondType: 'F'}}
      />

      <QuestionComponent question={'12. Meine Stärke liegt eher darin, '}
        options={{first: 'gut zu organisieren', firstType: 'B', second: 'flexibel auf Unerwartetes zu reagieren', secondType: 'W'}}
      />



      <QuestionComponent question={'13. Wenn ich in Gesellschaft bin, '}
        options={{first: 'höre ich viel zu.', firstType: 'I', second: 'rede ich gern und viel.', secondType: 'E'}}
      />

      <QuestionComponent question={'14. Wenn ich Probleme habe, '}
        options={{first: 'spreche ich, wenn überhaupt, mit wenigen Menschen darüber.', firstType: 'I', second: 'trage ich mein Herz auf der Zunge.', secondType: 'E'}}
      />

      <QuestionComponent question={'15. '}
        options={{first: 'Ich würde mich eher als Gefühlsmenschen bezeichnen.', firstType: 'F', second: 'Ich würde mich eher als Kopfmenschen bezeichnen.', secondType: 'D'}}
      />

      <QuestionComponent question={'16. Wenn ich Gäste erwarte, '}
        options={{first: 'habe ich meine Vorbereitungen in der Regel schon eine viertel Stunde, bevor die Gäste kommen, abgeschlossen', firstType: 'B', second: 'bin ich noch bei den Vorbereitungen, während die Ersten eintreffen.', secondType: 'W'}}
      />



      <QuestionComponent question={'17. '}
        options={{first: 'Ich habe eine gute Wahrnehmung für Details.', firstType: 'S', second: 'Ich habe eine schlechte Wahrnehmung für Details.', secondType: 'In'}}
      />

      <QuestionComponent question={'18. '}
        options={{first: 'Ich weiß am Montag bereits gerne, was ich am Wochenende vorhabe.', firstType: 'B', second: 'Ich lasse das Wochenende am liebsten auf mich zukommen.', secondType: 'W'}}
      />

      <QuestionComponent question={'19. Ich tanke meine Batterien am besten auf, '}
        options={{first: 'wenn ich in netter Gesellschaft bin.', firstType: 'E', second: 'wenn ich alleine bin.', secondType: 'I'}}
      />

      <QuestionComponent question={'20. Es macht mir mehr Spaß, '}
        options={{first: 'etwas Neues zu entwerfen.', firstType: 'In', second: 'einen bestehenden Entwurf so lange zu überarbeiten, bis er funktioniert.', secondType: 'S'}}
      />



      <QuestionComponent question={'21. Es nervt mich eher, '}
        options={{first: 'wenn Leute sich nicht an Verabredungen halten.', firstType: 'B', second: 'wenn Leute unflexibel sind.', secondType: 'W'}}
      />

      <QuestionComponent question={'22. '}
        options={{first: 'Meine Gefühle sind mir meist recht deutlich anzumerken.', firstType: 'E', second: 'Andere können nicht so leicht erkennen, was in mir vorgeht.', secondType: 'I'}}
      />

      <QuestionComponent question={'23. '}
        options={{first: 'Es passiert mir häufig, dass ich Sachen auf den letzten Drücker erledige.', firstType: 'W', second: 'Meistens habe ich eine gute Zeiteinteilung.', secondType: 'B'}}
      />

      <QuestionComponent question={'24. '}
        options={{first: 'Ich habe eher eine philosophische Ader.', firstType: 'In', second: 'Ich habe eher eine praktische Ader.', secondType: 'S'}}
      />



      <QuestionComponent question={'25. Ich entscheide und beurteile '}
        options={{first: 'eher objektiv/sachlich.', firstType: 'D', second: 'eher subjektiv/gefühlsmäßig.', secondType: 'F'}}
      />

      <QuestionComponent question={'26. Wenn ich über längere Zeit mit anderen Menschen zusammen bin, '}
        options={{first: 'finde ich das nicht anstrengend.', firstType: 'E', second: 'finde ich das oft ermüdend und anstrengend.', secondType: 'I'}}
      />

      <QuestionComponent question={'27. Ich bevorzuge eher eine Arbeit, '}
        options={{first: 'bei der soziale Fähigkeiten und Einfühlungsvermögen gefragt sind.', firstType: 'F', second: 'bei der rationales Handeln und analytisches Denken gefragt sind.', secondType: 'D'}}
      />

      <QuestionComponent question={'28. Ich verlasse mich lieber '}
        options={{first: 'auf meine fünf Sinne.', firstType: 'S', second: 'auf meine Intuition.', secondType: 'In'}}
      />



      <QuestionComponent question={'29. Wenn ich mit einer Gruppe von Freunden verreise, '}
        options={{first: 'kann ich diese fast ständig um mich haben.', firstType: 'E', second: 'brauche ich zwischendurch Zeit für mich allein.', secondType: 'I'}}
      />

      <QuestionComponent question={'30. '}
        options={{first: 'Ich formuliere meine Gedanken und Gefühle meist spontan.', firstType: 'E', second: 'Ich überlege meist länger, bevor ich meine Gedanken und Gefühle äußere.', secondType: 'I'}}
      />

      <QuestionComponent question={'31. Ich mag es, '}
        options={{first: 'wenn jemand eine bildreiche Sprache benutzt und seine Rede ausschmückt.', firstType: 'In', second: 'wenn sich jemand präzise ausdrückt und schnell zum Punkt kommt.', secondType: 'S'}}
      />

      <QuestionComponent question={'32. Ich arbeite lieber in einem Bereich, '}
        options={{first: 'in dem viele neue Konzepte gefragt sind.', firstType: 'In', second: 'in dem es auf Genauigkeit und Faktenwissen ankommt.', secondType: 'S'}}
      />



      <QuestionComponent question={'33. '}
        options={{first: 'Ich ahne schon früh, wenn sich zwei verlieben.', firstType: 'F', second: 'Ich bin oft einer der letzten, der merkt, wenn es zwischen zweien gefunkt hat.', secondType: 'D'}}
      />

      <QuestionComponent question={'34. '}
        options={{first: 'Unangenehme Dinge packe ich meistens an, um sie hinter mich zu bringen.', firstType: 'B', second: 'Unangenehme Dinge schiebe ich häufig auf die lange Bank.', secondType: 'W'}}
      />

      <QuestionComponent question={'35. Wenn ich auf einer Party bin, '}
        options={{first: 'spreche ich eher nicht so gern fremde Menschen an.', firstType: 'I', second: 'spreche ich gern fremde Menschen an.', secondType: 'E'}}
      />

      <QuestionComponent question={'36. Wenn ich vor einer schwierigen Aufgabe stehe, '}
        options={{first: 'lege ich los, wenn ich mir eine grobe Skizze über meine Vorgehensweise gemacht habe.', firstType: 'In', second: 'plane ich die einzelnen Schritte recht genau.', secondType: 'S'}}
      />



      <QuestionComponent question={'37. '}
        options={{first: 'Ich erlebe meine Gefühle eher spontan und intensiv.', firstType: 'E', second: 'Ich bin eher nicht so schnell in Gefühlswallungen zu versetzen.', secondType: 'I'}}
      />

      <QuestionComponent question={'38. Ich arbeite am effektivsten *'}
        options={{first: 'am Ende, wenn die Zeit drängt.', firstType: 'W', second: 'im Vorfeld, wenn ich weiß, dass mir noch genügend Zeit bleibt.', secondType: 'B'}}
      />

      <QuestionComponent question={'39. Es bereitet mir mehr Spaß, '}
        options={{first: 'mich über Sachthemen zu unterhalten.', firstType: 'D', second: 'mich über zwischenmenschliche Beziehungen zu unterhalten.', secondType: 'F'}}
      />

      <QuestionComponent question={'40. '}
        options={{first: 'Ich sinniere gern über die „großen Fragen des Lebens“.', firstType: 'In', second: 'Ich wende mich lieber handfesten Dingen zu.', secondType: 'S'}}
      />
        
      

    </div>
  );
};

export default Questions;
