import React, { useState, useEffect } from 'react'

// Icons
import { Icon } from '@iconify/react'
import caretDownIcon from '@iconify/icons-mdi/caret-down'

// CSS styles
import './styles.css'

interface SelectItem {
    value: string,
    label: string
}

interface SelectProps {
  selectLabel: string,
  selected: SelectItem,
  items: SelectItem[],
  onOptionSelect: (opt: SelectItem) => void
}

const Select: React.FC<SelectProps> = ({ selectLabel, selected, items, onOptionSelect }) => {
  const [themes, setThemes] = useState(["Select", "Close"])
  const [currentSelected, setCurrentSelected] = useState({ value: selected.value, label: selected.label })

  function toggleSelect() {
    document.querySelectorAll('div.Select.Open')
      .forEach(el => {
        el.classList.remove('Open')
        el.classList.add('Close')
      })
    if (items.length !== 0) {
      let newThemes = []
      if (themes.includes("Open"))
        newThemes = ["Select", "Close"]
      else {
        newThemes = ["Select", "Open"]
      }
      setThemes(newThemes)
    }
  }

  function setSelection(item: SelectItem) {
    const newThemes = [...themes]
    newThemes.pop()
    newThemes.push("Close")
    setThemes(newThemes)
    setCurrentSelected(item)
  }

  useEffect(() => {
    onOptionSelect(currentSelected)
  }, [currentSelected]) //eslint-disable-line

  return (
    <div className={themes.join(' ')}>
        <label>{selectLabel}</label>
        <div onClick={toggleSelect} className="SelectContent">
            <div className="SelectSelector">
              <span>{currentSelected.label}</span>
              {items.length !== 0 && <Icon icon={caretDownIcon} />}
            </div>
            <ul>{
              items.map((item, i) => (
                <li
                  className={item.value === currentSelected.value ? 'Selected' : ''}
                  key={i}
                  onClick={() => setSelection(item)}
                >{item.label}</li>
              ))
            }</ul>
        </div>
    </div>
  )
}

export default Select
