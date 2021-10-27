<Modal
  animationType="fade"
  transparent={true}
  visible={modalVisible}
  onDismiss={toggleModalVisibility}
>
  <View style={styles.centeredView}>
    <View style={styles.modalView}>
      <View>
        <TextInput
          style={inputStyles.workoutNameInput}
          placeholder="Enter Workout Name..."
          placeholderTextColor={"white"}
          keyboardAppearance={"dark"}
          spellCheck={false}
          textAlign={"center"}
          value={workoutName}
          onChangeText={(value) => setWorkoutName(value)}
        />
      </View>
      <View style={inputStyles.typeViewStyle}>
        <Text style={inputStyles.typeStyle}>Workout Type:</Text>
        <View style={buttonView.selectStyle}>
          <DropDownPicker
            items={[
              { label: "Item 1", value: "Item 1" },
              { label: "Item 2", value: "Item 2" },
              { label: "Item 3", value: "Item 3" },
              { label: "Item 4", value: "Item 4" },
              { label: "Item 5", value: "Item 5" },
            ]}
            containerStyle={{
              height: 40,
              width: 150,
              marginBottom: 5,
            }}
            style={{ backgroundColor: "#fafafa" }}
            dropDownStyle={{ backgroundColor: "#fafafa" }}
            onChangeItem={(item) => console.log(item.label, item.value)}
          />
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={buttonView.cancelButtonStyle}>
          <Button
            title="Cancel"
            onPress={toggleModalVisibility}
            style={{ marginRight: 20 }}
          />
        </View>
        <View style={buttonView.submitButtonStyle}>
          <Button
            title="Submit"
            onPress={handleSubmit}
            disabled={!workoutName}
          />
        </View>
      </View>
    </View>
  </View>
</Modal>;
