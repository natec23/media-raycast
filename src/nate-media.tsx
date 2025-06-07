import { ActionPanel, Action, Icon, List } from "@raycast/api";
import gifs from "./gifs.json";
import videos from "./videos.json";

const ITEMS = [...gifs, ...videos].map((item, key) => {
  return {
    id: key,
    icon: Icon[item.icon as typeof Icon],
    title: item.title,
    subtitle: item.tags.join(', '),
    accessory: item.type,
    url: item.url,
  };
});

export default function Command() {
  return (
    <List>
      {ITEMS.map((item) => (
        <List.Item
          key={item.id}
          icon={item.icon}
          title={item.title}
          subtitle={item.subtitle}
          accessories={[{ icon: Icon.Link, text: item.accessory }]}
          actions={
            <ActionPanel>
              <Action.CopyToClipboard content={item.url} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
