@echo off
echo Creating image directory...
mkdir "c:\Users\mukun\OneDrive\Desktop\rajeev-engineering-workshop\src\assets\images" 2>nul

echo Copying images...
copy /Y "C:\Users\mukun\.gemini\antigravity-ide\brain\6ba1b140-a149-472a-966c-be96e734e9ba\hero_bg_1781501285498.png" "c:\Users\mukun\OneDrive\Desktop\rajeev-engineering-workshop\src\assets\images\hero-welding.jpg"
copy /Y "C:\Users\mukun\.gemini\antigravity-ide\brain\6ba1b140-a149-472a-966c-be96e734e9ba\main_gate_1781501298521.png" "c:\Users\mukun\OneDrive\Desktop\rajeev-engineering-workshop\src\assets\images\main-gate.jpg"
copy /Y "C:\Users\mukun\.gemini\antigravity-ide\brain\6ba1b140-a149-472a-966c-be96e734e9ba\sliding_gate_1781502460389.png" "c:\Users\mukun\OneDrive\Desktop\rajeev-engineering-workshop\src\assets\images\sliding-gate.jpg"
copy /Y "C:\Users\mukun\.gemini\antigravity-ide\brain\6ba1b140-a149-472a-966c-be96e734e9ba\rolling_shutter_1781502475232.png" "c:\Users\mukun\OneDrive\Desktop\rajeev-engineering-workshop\src\assets\images\rolling-shutter.jpg"
copy /Y "C:\Users\mukun\.gemini\antigravity-ide\brain\6ba1b140-a149-472a-966c-be96e734e9ba\window_grill_1781502497434.png" "c:\Users\mukun\OneDrive\Desktop\rajeev-engineering-workshop\src\assets\images\window-grill.jpg"
copy /Y "C:\Users\mukun\.gemini\antigravity-ide\brain\6ba1b140-a149-472a-966c-be96e734e9ba\balcony_railing_1781502510904.png" "c:\Users\mukun\OneDrive\Desktop\rajeev-engineering-workshop\src\assets\images\balcony-railing.jpg"
copy /Y "C:\Users\mukun\.gemini\antigravity-ide\brain\6ba1b140-a149-472a-966c-be96e734e9ba\industrial_shed_1781502525141.png" "c:\Users\mukun\OneDrive\Desktop\rajeev-engineering-workshop\src\assets\images\industrial-shed.jpg"
copy /Y "C:\Users\mukun\.gemini\antigravity-ide\brain\6ba1b140-a149-472a-966c-be96e734e9ba\featured_gate_1_1781502538864.png" "c:\Users\mukun\OneDrive\Desktop\rajeev-engineering-workshop\src\assets\images\featured-gate-1.jpg"
copy /Y "C:\Users\mukun\.gemini\antigravity-ide\brain\6ba1b140-a149-472a-966c-be96e734e9ba\featured_shutter_1781502559383.png" "c:\Users\mukun\OneDrive\Desktop\rajeev-engineering-workshop\src\assets\images\featured-shutter.jpg"
copy /Y "C:\Users\mukun\.gemini\antigravity-ide\brain\6ba1b140-a149-472a-966c-be96e734e9ba\staircase_railing_1781501321800.png" "c:\Users\mukun\OneDrive\Desktop\rajeev-engineering-workshop\src\assets\images\featured-railing.jpg"
copy /Y "C:\Users\mukun\.gemini\antigravity-ide\brain\6ba1b140-a149-472a-966c-be96e734e9ba\welding_action_1781501372881.png" "c:\Users\mukun\OneDrive\Desktop\rajeev-engineering-workshop\src\assets\images\workshop-team.jpg"

REM Reuse some images for the gallery since generation quota is exhausted
copy /Y "C:\Users\mukun\.gemini\antigravity-ide\brain\6ba1b140-a149-472a-966c-be96e734e9ba\hero_bg_1781501285498.png" "c:\Users\mukun\OneDrive\Desktop\rajeev-engineering-workshop\src\assets\images\gallery-before.jpg"
copy /Y "C:\Users\mukun\.gemini\antigravity-ide\brain\6ba1b140-a149-472a-966c-be96e734e9ba\main_gate_1781501298521.png" "c:\Users\mukun\OneDrive\Desktop\rajeev-engineering-workshop\src\assets\images\gallery-during.jpg"
copy /Y "C:\Users\mukun\.gemini\antigravity-ide\brain\6ba1b140-a149-472a-966c-be96e734e9ba\rolling_shutter_1781502475232.png" "c:\Users\mukun\OneDrive\Desktop\rajeev-engineering-workshop\src\assets\images\gallery-final.jpg"
copy /Y "C:\Users\mukun\.gemini\antigravity-ide\brain\6ba1b140-a149-472a-966c-be96e734e9ba\window_grill_1781502497434.png" "c:\Users\mukun\OneDrive\Desktop\rajeev-engineering-workshop\src\assets\images\gallery-installation.jpg"
copy /Y "C:\Users\mukun\.gemini\antigravity-ide\brain\6ba1b140-a149-472a-966c-be96e734e9ba\hero_bg_1781501285498.png" "c:\Users\mukun\OneDrive\Desktop\rajeev-engineering-workshop\src\assets\images\darbhanga-map.jpg"

echo Setup complete!
