import MessageBoxItems from "./MessageBoxItems";

const Test = [
  {
    id: "1",
    title: "لورم ایپسوم",
    time: "12.45",
    message: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
  },
  {
    id: "2",
    title: "لورم ایپسوم",
    time: "12.45",
    message: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
  },
  {
    id: "3",
    title: "لورم ایپسوم",
    time: "12.45",
    message: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
  },
  {
    id: "4",
    title: "لورم ایپسوم",
    time: "12.45",
    message: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
  },
  {
    id: "5",
    title: "لورم ایپسوم",
    time: "12.45",
    message: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
  },

  {
    id: "6",
    title: "لورم ایپسوم",
    time: "12.45",
    message: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
  },

  {
    id: "7",
    title: "لورم ایپسوم",
    time: "12.45",
    message: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
  },
];
export interface ITest {
  id: string;
  title: string;
  time: string;
  message: string;
}

function MessageBoxContent(): React.JSX.Element {
  return (
    <nav className="px-4 py-2 overflow-y-auto scrollbar">
      <ul className="flex flex-col gap-4">
        {Test.map((item) => (
          <MessageBoxItems key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
}

export default MessageBoxContent;
