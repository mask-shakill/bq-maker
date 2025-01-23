import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: "center",
  },
  answerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  questionNumber: {
    fontSize: 12,
    width: "10%",
  },
  answer: {
    fontSize: 12,
    width: "90%",
  },
});

export function AnswerSheetPDF({ setup, questions }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>{setup.examName} - Answer Sheet</Text>
          <Text style={styles.subtitle}>{setup.institutionName}</Text>
          <Text style={styles.subtitle}>{setup.otherInfo}</Text>
        </View>
        <View style={styles.section}>
          {questions.map((q, index) => (
            <View key={index} style={styles.answerRow}>
              <Text style={styles.questionNumber}>{index + 1}.</Text>
              <Text style={styles.answer}>
                {q.answer} -{" "}
                {q.options.findIndex((option) => option === q.answer) !== -1
                  ? String.fromCharCode(
                      97 + q.options.findIndex((option) => option === q.answer)
                    )
                  : "N/A"}
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
