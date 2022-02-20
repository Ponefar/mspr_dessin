import * as React from 'react';
import { List } from 'react-native-paper';
import Title from "../assets/title";
import { ScrollView } from 'react-native';

const NewsLetter = () => {
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);

    return (
      <ScrollView >
      <List.Section title={<Title texte=" Questions / Answers" />}>
        <List.Accordion 
          expanded={expanded}
          
          onPress={handlePress}
          title="Welcome on your app"
          left={props => <List.Icon {...props} icon="folder" />}>
          <List.Item title="This application transforms 2D into 3D"
          right={() => <List.Icon />} />
          
          <List.Item title="Please follow all the steps"
          right={() => <List.Icon />} />
        </List.Accordion>
  
        <List.Accordion
          title="Step 1"
          left={props => <List.Icon {...props} icon="folder" />}>
          <List.Item title="Click on DRAW on the bottom navigation"
          right={() => <List.Icon />} />
        </List.Accordion>

        <List.Accordion
          title="Step 2"
          left={props => <List.Icon {...props} icon="folder" />}>
          <List.Item title="Choose the model that matches your design"
          right={() => <List.Icon />} />
          
          <List.Item title="Press it"
          right={() => <List.Icon />} />
        </List.Accordion>

        <List.Accordion
          title="Step 3"
          left={props => <List.Icon {...props} icon="folder" />}>
          <List.Item title="Overlay your drawing with that of the camera"
          right={() => <List.Icon />} />
          
          <List.Item title="Press the red square"
          right={() => <List.Icon />} />
        </List.Accordion>
        <List.Accordion
          title="To share it ?"
          left={props => <List.Icon {...props} icon="folder" />}>
          <List.Item title="Click on the button at the bottom right"
          right={() => <List.Icon />} />
          
          <List.Item title="Press the red square"
          right={() => <List.Icon />} />
        </List.Accordion>
        <List.Accordion
          title="Join us ?"
          left={props => <List.Icon {...props} icon="folder" />}>
          <List.Item title="To follow our activities click on NEWSLETTER"
          right={() => <List.Icon />} />
          
          <List.Item title="Then complete the form"
          right={() => <List.Icon />} />
                    
          <List.Item title="Click on Subscrite and ... WELCOME :)"
          right={() => <List.Icon />} />
        </List.Accordion>
      </List.Section>
      </ScrollView>
    );
  };
  
export default NewsLetter