"use client";

import { useState } from "react";
import SelectDropdown from "./select-dropdown";

const InternshipDuration = () => {
  const DURATIONS = ['1 Month', '2 Months', '4–6 Months'];
  const [duration, setDuration] = useState("")

  return (
    <SelectDropdown
      label="Duration"
      name="duration"
      options={DURATIONS}
      value={duration}
      onChange={setDuration}
      placeholder="Select a duration"
    />
  )


}

export default InternshipDuration