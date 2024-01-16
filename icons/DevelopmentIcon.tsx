import React, { ReactNode } from 'react'

export default function DevelopmentIcon() {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={60}
    height={60}
    fill="none"
  >
    <path fill="url(#a)" d="M0 0h60v60H0z"    />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.01667)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGvmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzYwLCAyMDIwLzAyLzEzLTAxOjA3OjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTEyLTI3VDE3OjIzOjMyKzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wMS0wNFQxMTozNDoxMCswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0wMS0wNFQxMTozNDoxMCswNTozMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyYzY4MGJmZC05ZTk5LTAxNGQtOTdmYi0yNzRhMjQ5N2Q4YzQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0NWI3ZDQzMC1jYzExLTk4NGQtYTVhNy04ODlmMzg4OTc4OTYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2ZjFiNGQ3NC03N2IxLWFjNDktODNkNy03ODgzMzBhMDE0ZjUiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjZmMWI0ZDc0LTc3YjEtYWM0OS04M2Q3LTc4ODMzMGEwMTRmNSIgc3RFdnQ6d2hlbj0iMjAyMy0xMi0yN1QxNzoyMzozMiswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiYzcwZTkxOS04YjNhLTkzNGMtODFmMi1lZjJhYmVmODY2M2YiIHN0RXZ0OndoZW49IjIwMjMtMTItMjdUMTc6NDM6MDYrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MmM2ODBiZmQtOWU5OS0wMTRkLTk3ZmItMjc0YTI0OTdkOGM0IiBzdEV2dDp3aGVuPSIyMDI0LTAxLTA0VDExOjM0OjEwKzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+R7WpAAAABCVJREFUaIHt222IVFUYwPHfrGtLZuIWUULYClFIQVDQK1EQK/vFPhgRlZRF+SEIwoyI3gwqKIugD0FJUhQEUQhBRoRUVFZQYLIhBulWVEZWiJaGuzt9ODMyO7tz77l7X6bd9Q+XO+fOeXmee57znHOeM1OrD64WwXrchoUxmbvAr3gJm9My9kZUtgGP5hSobJbiEtTwclLGnojK1hYhUUWkyhqj8JICBKmK09IyxJh0O6uwCK800tcJY/vVDukY/sU1+DlDmRpuwuMZykxL4Z0Yb0uPJaRj+AfDOJCx3KcZ8x9TeD1ux0kt353Vocy3GG1JD+NoQjqGfvyIPzOWO6PD8wF83JLehxexuVd2L9zXuGLTsSxqXEWxtO3zxaj14s7Gw5X4JqXgTGHERLlvxFNYW6sPrq4LY3JeFwSrigHsxUiM0/qhXFkKZS+uTsoQo/BMMunU2SFm4TGrOK5wxYzhCtxXVYPTWWkVybvYbuJCplS63cNvNu43VNVgNxUexdbG52urarQMhX/HIG5OybcVf+FCnN3yfBRX4i4cLlq4osfw91iBPcLqJommObe/mEPYLeyEPsJ7Om9kMlNkD38ghFn24HwTdyvtJJnzYnwpvLBdwsrpu6KELErhZzGEP4Qe2y55hbbD1ObcZBk+EV7gCC6SLaDQkbwKj2GdsJ8exyN4HSenlHu7cU8a52fis0b9h7AGj+WQFfnH8Cq8gwV4AbdGltvSuKd553mC9fTjYWHv/jeezipok7w9PNy4n4qrIsvsFJxSJ3OeiiGc3vj8RbR0U5BX4W04Bz/hMsFxpfFG4542bTXZJExTvwnT3Zbk7MnkVXgAXwumvE+Ykp5MKRNrzvCQEGs+gnvxvmBN06YIL71QCNk242IP4n7Up8jbNOdzJZvzAVyPJ4Rx/ByeEUKzuShyHt4gmN8CwamsMFnppjlfnlDPYWF4vCUE1rfhnqKELHppeQe+Ekx9t8m7oKY5J43fIziICwQHFesMoyhje7hciC0dxfyW558LL2GZcMrQiX5hsVFKULHM3dL8tnRzpTQUUba0CGqV28PmlHVLhW1OokqFT8R5uLTCNidRZYhnOD1L+cQoPJ6e5X9DqqwxCs+qI5hWhbsd0CuTY7r1tjzIeog9I5nNvTolc07hbpw8tHvSSl961T28XPD6rdfKKgXoRg+3v+RTqmy8aoV3VdzeJHqE+PBcYX+P8CvUucJrvUK8t0/Yti3uqjjlsV+IiT1fi/y99KyhbKdVkz3SWOrurOx5eJOwRs9yPVCmQGUqPGB64Zx1cgbbkyjTpEdwQon1T4s5t3koQuE+bBQWMPWSrl+Ek43cFGHSG3F3AfUksUQ4uzoonBdPmyJ6eE0BdcQSe+DekbwK16T/vKFIcv9R7LjTykjd1H8bKIsP81bwHymez95+dVbIAAAAAElFTkSuQmCC"
        id="b"
        width={60}
        height={60}
      />
    </defs>
  </svg>
  )
}
