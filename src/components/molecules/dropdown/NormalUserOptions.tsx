import { UserDropdownDivideBySection } from '.'
import { DropdownItem } from '../../atoms'
import { KeyIcon, UserPencilIcon, WriteIcon } from '../../atoms/icon'

export const NormalUserOptions = (): JSX.Element => {
  return (
    <>
      <UserDropdownDivideBySection
        sectionTitle='Account settings'
        className='py-2'
      />

      <DropdownItem to='CHANGE_USERNAME'>
        <UserPencilIcon />
        Change Username
      </DropdownItem>

      <DropdownItem to='CHANGE_PASSWORD'>
        <KeyIcon />
        Change Password
      </DropdownItem>

      <DropdownItem to='CHANGE_FULLNAME'>
        <WriteIcon />
        Change Full Name
      </DropdownItem>
    </>
  )
}
