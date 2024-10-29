Clean expo project (Expo 51) to showcase the runtime issue when using `WithSkiaWeb` util and changing props dynamically.

With the current setup, which is deferring the App component registration until `skia` finishes loading, the sample component renders correctly both on mobile and web.

## Reproduce the crash

To reproduce the crash, do the following:

1. In `index.web.tsx`, uncomment the normal App registration, and comment the deferred registration

   ```ts
   // LoadSkiaWeb().then(async () => {
   //   renderRootComponent(App);
   // });
   renderRootComponent(App);
   ```

2. In `app/(tabs)/index.tsx`, uncomment the SkiaComponent (which internally uses `WithSkiaWeb` just for web)

```ts
   import SkiaComponent from "@/components/SkiaComponent/SkiaComponent";
   // import BaseSkiaComponent from "@/components/SkiaComponent/BaseSkiaComponent";

       <SkiaComponent contentSize={size} borderSize={2} />


      {/* <BaseSkiaComponent contentSize={size} borderSize={2} /> */}

```


You will see how it loads for a second and immediately crashes with `Cannot read properties of null (reading 'rangeMin')` error as soon as the first state update happens

<img width="600" alt="image" src="https://github.com/user-attachments/assets/1f1c2e10-6d2d-4f31-91e3-6a351ecbea63">

| LoadSkiaWeb | WithSkiaWeb |
| ------ | ------ |
|    ![working](https://github.com/user-attachments/assets/03d6e4f6-67c4-45b4-ba4e-2c33be2868b4) | ![issue](https://github.com/user-attachments/assets/022d089b-6bd6-45d3-a173-f6ab312135c1)    |

## Run the project

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npm run start
   [w] for web
   [i] for ios
   [a] for android
   ```
