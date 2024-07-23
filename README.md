# Print.ology (DeltaHacks VI Winner)
![printology1](https://github.com/user-attachments/assets/2bf4970c-7975-46db-b014-1724346d1783)

In this project we built an iOS application capable of viewing 3D models in augmented reality and wirelessly 3D printing them. For details on this project head over to DevPost: https://devpost.com/software/print-ology

## Inspiration

3-D Printing. It has been around for decades, yet the printing process is often too complex to navigate, labour intensive and time consuming. Although the technology exists, it is only used by those who are trained in the field because of the technical skills required to operate the machine. We want to change all that. We want to make 3-D printing simpler, faster, and accessible for everyone. By leveraging the power of IoT and Augmented Reality, we created a solution to bridge that gap.
## What it does
Printology revolutionizes the process of 3-D printing by allowing users to select, view and print files with a touch of a button. Printology is the first application that allows users to interact with 3-D files in augmented reality while simultaneously printing it wirelessly. This is groundbreaking because it allows children, students, healthcare educators and hobbyists to view, create and print effortlessly from the comfort of their mobile devices. For manufacturers and 3-D Farms, it can save millions of dollars because of the drastically increased productivity.

The product is composed of a hardware and a software component. Users can download the iOS app on their devices and browse a catalogue of .STL files. They can drag and view each of these items in augmented reality and print it to their 3-D printer directly from the app. Printology is compatible with all models of printers on the market because of the external Raspberry Pi that generates a custom profile for each unique 3-D printer. Combined, the two pieces allow users to print easily and wirelessly.

## How we built it
![printology2](https://github.com/user-attachments/assets/e9a095cf-abd8-4d4e-91e2-fd29511659e5)

We built an application in XCode that uses Apple’s AR Kit and converts STL models to USDZ models, enabling the user to view 3-D printable models in augmented reality. This had never been done before, so we had to write our own bash script to convert these models. Then we stored these models in a local server using node.js. We integrated functions into the local servers which are called by our application in Swift.

In order to print directly from the app, we connected a Raspberry Pi running Octoprint (a web based software to initialize the 3-D printer). We also integrated functions into our local server using node.js to call functions and interact with Octoprint. Our end product is a multifunctional application capable of previewing 3-D printable models in augmented reality and printing them in real time.
