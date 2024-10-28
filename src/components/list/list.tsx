import { FC, useState } from "react";
import { Button } from "../button/button";
import "./../form/form.css";

interface Band {
  id: number;
  name: string;
  genre?: string;
}

export const List: FC = () => {
  const [bandName, setBandName] = useState("");
  const [bands, setBands] = useState<Band[]>([]);

  const insertAtPosition = (position: number) => {
    const insertAt = position; // Could be any index
    const nextBands = [
      // Items before the insertion point:
      ...bands.slice(0, insertAt),
      // New item:
      { id: bands.length + 1, name: bandName },
      // Items after the insertion point:
      ...bands.slice(insertAt),
    ];
    setBands(nextBands);
    setBandName("");
  };

  const handleReverse = () => {
    const reversed = [...bands];
    reversed.reverse();
    setBands(reversed);
  };

  const handleSort = () => {
    const isAscSorted: boolean = [...bands].every(
      (band, i, arr) => i === 0 || arr[i - 1].name <= band.name
    );

    const sortedBands = isAscSorted
      ? [...bands].reverse() // If already sorted in ascending, reverse it
      : [...bands].sort((a, b) => a.name.localeCompare(b.name)); // Otherwise, sort in ascending order

    setBands(sortedBands);
  };

  return (
    <>
      <h4>Favourite bands:</h4>
      <ul>
        {bands.map((band) => (
          <li key={band.id}>
            {band.name} {band.genre && `-> ${band.genre}`}
            <button
              className="delete"
              onClick={() => {
                setBands(bands.filter((b) => b.id !== band.id));
              }}
              style={{ marginRight: 10, marginLeft: 10 }}
            >
              Remove
            </button>
            <button
              className="edit"
              style={{ marginRight: 10, marginLeft: 10 }}
              onClick={() => {
                setBands(
                  bands.map((b) =>
                    b.id === band.id ? { ...b, genre: "Rock" } : b
                  )
                );
              }}
            >
              Edit genre
            </button>
          </li>
        ))}
      </ul>
      <input
        value={bandName}
        onChange={(e) => setBandName(e.target.value)}
        placeholder="Type new favourite band"
      />
      <Button
        onClick={() => {
          bands.push({
            id: ++bands.length,
            name: bandName,
          });
        }}
      >
        Add
      </Button>
      <button
        className="delete"
        style={{ marginTop: 10, marginBottom: 10, marginRight: 10 }}
        onClick={() => {
          setBands(bands.map((b) => ({ ...b, genre: "" })));
        }}
      >
        Reset genres
      </button>
      <button
        onClick={() => insertAtPosition(2)}
        style={{ marginTop: 10, marginBottom: 10, marginRight: 10 }}
      >
        Insert at position 2
      </button>
      <button
        onClick={handleReverse}
        style={{ marginTop: 10, marginBottom: 10, marginRight: 10 }}
      >
        Reverse
      </button>
      <button
        onClick={handleSort}
        style={{ marginTop: 10, marginBottom: 10, marginRight: 10 }}
      >
        Sort
      </button>
    </>
  );
};
