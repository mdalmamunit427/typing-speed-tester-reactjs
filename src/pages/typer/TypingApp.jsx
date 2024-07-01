import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetTest, startTest, submitTest, updateTimeLeft, updateTypedChars } from "../../redux/features/typingTestSlice";
import TextDisplay from "./TextDisplay";
import TypingArea from "./TypingArea";
import Timer from "./Timer";
import SpeedStats from "./SpeedStats";
import { Button } from "flowbite-react";


const TypingApp = () => {
    const dispatch = useDispatch();
    const {
      text,
      currentIndex,
      timeLeft,
      isStarted,
      typedChars,
      wpm,
      accuracy,
      isSubmitted,
    } = useSelector((state) => state.typingTest);
  
    useEffect(() => {
      if (isStarted && timeLeft > 0) {
        dispatch(updateTypedChars(typedChars));
      }
    }, [typedChars, timeLeft, isStarted, dispatch]);
  
    const handleType = (value) => {
      if (!isStarted) dispatch(startTest());
      dispatch(updateTypedChars(value));
    };
  
    const handleTimeUp = (newTimeLeft) => {
      dispatch(updateTimeLeft(newTimeLeft));
    };
  
    const handleSubmit = () => {
      dispatch(submitTest());
    };
  
    const handleReset = () => {
      dispatch(resetTest());
    };
  return (
    <div className="mt-8 space-y-4 px-4">
      <h1 className="text-3xl font-semibold mb-5">Typing Speed Tester</h1>
      <TextDisplay text={text} currentIndex={currentIndex} />
      <TypingArea onType={handleType} isDisabled={isSubmitted} />
      <Timer timeLeft={timeLeft} onTimeUp={handleTimeUp} />
      {isSubmitted && <SpeedStats wpm={wpm} accuracy={accuracy} />}
      <div className="flex gap-5">
        <Button color="blue" onClick={handleSubmit}  disabled={isSubmitted}>
          Submit Test
        </Button>
        <
          Button color="failure" onClick={handleReset} >
          Reset Test
        </Button>
      </div>
    </div>
  )
}

export default TypingApp