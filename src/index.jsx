import ForgeUI, { render, Text, InlineDialog, ContentBylineItem } from '@forge/ui';

const App = () => {
  return (
    <InlineDialog>
      <Text>Hello world!</Text>
      <Text>Dicas:
        Notas ver no fim da página dicas de edição entre outros!!!
      </Text>
    </InlineDialog>
  );
};

export const run = render(
  <ContentBylineItem>
    <App />
  </ContentBylineItem>
);
