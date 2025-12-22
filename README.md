# Engineering Portfolio

Mechanical Engineering student focused on aerospace systems, thermal modeling, and applied machine learning.
Hands-on experience across CubeSat payloads, UAV design, and medical image analysis.

<hr style="
border: none;
height: 1px;
background: linear-gradient(to right, transparent, #444, transparent);
margin: 50px 0;
">

<h2 style="display: flex; align-items: center; gap: 10px;">
HyCUBE: CubeSat Thermal & Instrumentation Payload
<img src="assets/NASA_MN_SpaceGrantLogo.jpg" width="28" style="opacity: 0.9;">
</h2>

<p style="margin-top: -8px; color: #b0b0b0; font-style: italic;">
NASA Minnesota Space Grant
</p>

<div style="display: flex; gap: 20px; justify-content: center; margin-bottom: 10px;">
<img src="assets/HyCubeINAir.png" width="32%">
<img src="assets/HyCubeThermoPlot_needupdate.png" width="32%">
<img src="assets/hycube_mission_graphic.webp" width="32%">
</div>

<div style="
margin: 10px auto 25px auto;
max-width: 900px;
padding: 10px 14px;
background: #111;
border-left: 3px solid #7dd3fc;
color: #cbd5e1;
font-size: 0.9rem;
">
<strong>Payload integration and mission context.</strong>
Flight hardware, thermal response trends, and orbital mission phases used to define environmental and design constraints.
</div>

<p style="color:#9ca3af; margin-bottom: 6px;">
Role — Mechanical / Thermal Engineering
</p>

<p>
Designed and analyzed a CubeSat payload for atmospheric sensing under the NASA Minnesota Space Grant program.
Work focused on thermal behavior, instrumentation integration, and mission-level constraints.
</p>

<h4 style="margin-top: 18px; border-bottom: 1px solid #333; padding-bottom: 6px;">
Key Contributions
</h4>

<ul>
<li>Thermal modeling of payload components under orbital boundary conditions</li>
<li>Instrument packaging and environmental considerations</li>
<li>Data visualization of temperature response and mission profiles</li>
<li>Collaboration with aerospace systems and electrical teams</li>
</ul>

<hr style="
border: none;
height: 1px;
background: linear-gradient(to right, transparent, #444, transparent);
margin: 60px 0;
">

## Stroke Detection from Non-Contrast Head CT

<p style="margin-top: -8px; color: #b0b0b0; font-style: italic;">
Machine Learning + Medical Imaging
</p>

<div style="text-align: center; margin-bottom: 10px;">
<img src="assets/GradCam_StrokeUnlabeled.png" width="60%">
</div>

<div style="
margin: 10px auto 25px auto;
max-width: 900px;
padding: 10px 14px;
background: #111;
border-left: 3px solid #a78bfa;
color: #cbd5e1;
font-size: 0.9rem;
">
<strong>Model interpretability via Grad-CAM.</strong>
Activation maps confirm spatial focus on clinically relevant hemorrhage regions rather than skull or background artifacts.
</div>

<div style="display: flex; gap: 20px; justify-content: center;">
<img src="assets/ROC_curve_scratch.png" width="30%">
<img src="assets/ROC_curve_imagenet.png" width="30%">
<img src="assets/ROC_curve_jepa.png" width="30%">
</div>

<div style="
margin: 10px auto 25px auto;
max-width: 900px;
padding: 10px 14px;
background: #111;
border-left: 3px solid #a78bfa;
color: #cbd5e1;
font-size: 0.9rem;
">
<strong>Quantitative model comparison.</strong>
ROC-AUC curves comparing training from scratch, ImageNet pretraining, and JEPA-style initialization.
</div>

<p style="color:#9ca3af; margin-bottom: 6px;">
Task — Binary hemorrhage detection from head CT
</p>

<p style="color:#9ca3af; margin-bottom: 6px;">
Model — ResNet-18 (scratch, ImageNet pretrained, JEPA-style initialization)
</p>

<p>
Built and evaluated convolutional neural networks for stroke detection using non-contrast head CT scans.
Emphasis on model validation, interpretability, and robustness rather than accuracy alone.
</p>

<h4 style="margin-top: 18px; border-bottom: 1px solid #333; padding-bottom: 6px;">
Key Contributions
</h4>

<ul>
<li>Compared training strategies via ROC-AUC evaluation</li>
<li>Analyzed generalization across initialization methods</li>
<li>Applied Grad-CAM to validate spatial reasoning and detect bias</li>
<li>Focused on interpretability for real-world medical deployment</li>
</ul>

<hr style="
border: none;
height: 1px;
background: linear-gradient(to right, transparent, #444, transparent);
margin: 60px 0;
">

## Blended Wing Body UAV — <em>Aquila-S</em>

<p style="margin-top: -8px; color: #b0b0b0; font-style: italic;">
Aerodynamics & Vehicle Design
</p>

<div style="text-align: center; margin-bottom: 10px;">
<img src="assets/Figure4_FlowView.jpg" width="60%">
</div>

<div style="
margin: 10px auto 25px auto;
max-width: 900px;
padding: 10px 14px;
background: #111;
border-left: 3px solid #22c55e;
color: #cbd5e1;
font-size: 0.9rem;
">
<strong>Flow-field visualization.</strong>
Surface pressure and velocity distributions used to evaluate lift generation and aerodynamic efficiency.
</div>

<div style="display: flex; gap: 20px; justify-content: center;">
<img src="assets/CLvA_BWB.png" width="35%">
<img src="assets/Cm_vs_aplot.jpg" width="35%">
</div>

<div style="
margin: 10px auto 25px auto;
max-width: 900px;
padding: 10px 14px;
background: #111;
border-left: 3px solid #22c55e;
color: #cbd5e1;
font-size: 0.9rem;
">
<strong>Stability characterization.</strong>
Lift and pitching moment trends used to assess trim behavior and longitudinal stability.
</div>

<p>
Designed and analyzed a custom blended wing body UAV for aerodynamic efficiency and stability studies.
</p>

<h4 style="margin-top: 18px; border-bottom: 1px solid #333; padding-bottom: 6px;">
Key Contributions
</h4>

<ul>
<li>Blended wing geometry development and refinement</li>
<li>Aerodynamic analysis of lift, moment, and flow behavior</li>
<li>Stability assessment via pitching moment trends</li>
<li>Integration of analysis results into design iteration</li>
</ul>
