import Link from 'next/link'
import React from 'react'

const notifications = () => {
  return (
    <div>
      <div>
        Dashboard Notifications
      </div>
      <Link href="./dashboard/archieve"> Archieved Notification </Link>
    </div>

  )
}

export default notifications