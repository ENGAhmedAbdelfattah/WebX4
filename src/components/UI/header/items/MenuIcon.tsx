"use client"

import React from 'react'
import { TfiMenu } from "react-icons/tfi";
import { useAppDispatch } from "@/redux/app/hooks";
import { toggleActive } from "@/redux/features/activeNav/activeNavSlice";

function MenuIcon() {
	const dispatch = useAppDispatch();

  return (
		<TfiMenu           
		size={25}
		cursor="pointer"
		className="menu-icon" onClick={() => dispatch(toggleActive())} /> 
  )
}

export default MenuIcon