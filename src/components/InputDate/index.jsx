import { useEffect, useRef } from 'react';
import { DateRange } from 'react-date-range';

export default function IndexDate({ date, onChangeDate, setIsShowed }) {
  const refDate = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    if (refDate && !refDate.current.contains(event.target)) {
      setIsShowed(false);
    }
  };

  const check = (focus) => {
    focus.indexOf(1) < 0 && setIsShowed(false);
  };

  return (
    <div
      className="position-absolute"
      // style={{ top: '59px' }}
      style={{ zIndex: '1' }}
      ref={refDate}
    >
      <DateRange
        editableDateInputs={true}
        onChange={onChangeDate}
        moveRangeOnFirstSelection={false}
        onRangeFocusChange={check}
        ranges={[date]}
        maxDate={new Date()}
      />
    </div>
  );
}
