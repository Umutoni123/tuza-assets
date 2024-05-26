import { Field, Select } from '@headlessui/react'
import {ChevronDownIcon} from '@headlessui/react'

import clsx from 'clsx'

export default function Language() {
  return (
    <div className="w-full max-w-md px-4">
      <Field>
        <div className="relative">
          <Select
            className={clsx(
              'mt-3 block w-full rounded-lg border-none bg-gray-600 py-1.5 px-3 text-sm/6 ',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 '
            )}
          >
            <option value="active">English</option>
            <option value="paused">French</option>
           
          </Select>
          
        </div>
      </Field>
    </div>
  )
}