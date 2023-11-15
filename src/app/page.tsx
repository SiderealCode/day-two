import { title } from "process";

export default function ListPage() {
  const dummies = [
    { prefix: "dude", title: "alelelel", subtitle: "bruh" },
    { prefix: "idiot", title: "johnnyboi", subtitle: "kms" },
    { prefix: "dudette", title: "birby", subtitle: "lmao" },
  ];

  return (
    <div className="text-center">
      <div>
        {dummies.map((dummy) => (
          <ListItem
            prefix={dummy.prefix}
            title={dummy.title}
            subtitle={dummy.subtitle}
          />
        ))}
      </div>
    </div>
  );
}

function ListItem(props: { prefix: string; title: string; subtitle: string }) {
  return (
    <div className="h-12 w-full flex flex-wrap justify-center items-center bg-gray-50">
      <p className=" text-gray-900 w-20 ">{props.prefix}</p>
      <div className="min-w-0 flex flex-wrap justify-center items-center w-20 ">
        <p className="text-sm font-semibold leading-6 text-gray-900 w-full">
          {props.title}
        </p>
        <p className="mt-1 truncate text-xs leading-5 text-gray-500 w-full">
          {props.subtitle}
        </p>
      </div>
    </div>
  );
}
