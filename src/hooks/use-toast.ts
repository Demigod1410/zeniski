"use client"

// Inspired by react-hot-toast library
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

type State = {
  toasts: ToasterToast[]
}

const memoryState: State = {
  toasts: []
}

const listeners: React.Dispatch<React.SetStateAction<State>>[] = []

function dispatch(action: { type: string; toastId?: string }) {
  switch (action.type) {
    case "DISMISS_TOAST":
      memoryState.toasts = memoryState.toasts.filter(toast => toast.id !== action.toastId)
      break
    default:
      break
  }
  listeners.forEach(listener => listener(memoryState))
}

function toast(toast: ToasterToast) {
  if (memoryState.toasts.length >= TOAST_LIMIT) {
    memoryState.toasts.shift()
  }
  memoryState.toasts.push(toast)
  listeners.forEach(listener => listener(memoryState))
}

function dismiss(toastId?: string) {
  dispatch({ type: "DISMISS_TOAST", toastId })
}

function update(toast: ToasterToast) {
  const index = memoryState.toasts.findIndex(t => t.id === toast.id)
  if (index > -1) {
    memoryState.toasts[index] = toast
    listeners.forEach(listener => listener(memoryState))
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast, dismiss, update }
