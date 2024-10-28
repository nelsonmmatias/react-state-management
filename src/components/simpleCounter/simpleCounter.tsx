import { FC, useState } from "react";

export enum UseCase {
  SNAPSHSOT,
  QUEUEING,
}

interface SimpleCounterProps {
  operator: number;
  useCase: UseCase;
}

export const SimpleCounter: FC<SimpleCounterProps> = ({
  useCase,
  operator,
}) => {
  const [number, setNumber] = useState(0);

  const handleQueueuingClick = () => {
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);
  };

  const handleSnapshotClick = () => {
    setNumber(number + 5);
    setTimeout(() => {
      alert(`The state is now ${number}`);
    }, 3000);
  };

  return (
    <div
      style={{
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: "lightblue",
        borderRadius: 5,
        width: "600px",
        textAlign: "center",
      }}
    >
      <div style={{ paddingBottom: 10, paddingTop: 10 }}>
        <h4>The state before incrementing: {number}</h4>
        <button
          onClick={
            useCase === UseCase.SNAPSHSOT
              ? handleSnapshotClick
              : handleQueueuingClick
          }
        >
          {`+${operator}`}
        </button>
      </div>
    </div>
  );
};
