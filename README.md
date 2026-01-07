# Engineering Portfolio

Mechanical Engineering student focused on aerospace systems, thermal modeling, and applied machine learning.  
Hands-on experience across CubeSat payloads, UAV design, and medical image analysis.

---

## Blended-Wing-Body CFD — Concept-to-Coefficients (SOLIDWORKS Flow Simulation 2024)

<p align="center">
  <a href="assets/BWB%20Executive%20Summary.pdf">
    <img src="assets/BWB_Plane_RelPresIso4deg.png" width="80%">
  </a>
</p>

<p align="center">
  <em>Relative static pressure on the BWB upper surface (α = 4°, V∞ ≈ 40 mph).</em><br>
  📄 <a href="assets/BWB%20Executive%20Summary.pdf"><b>Open the executive summary (PDF)</b></a>
</p>

**What this is:** Concept-level aerodynamic characterization of a blended-wing-body (BWB) using steady-state CFD in SOLIDWORKS Flow Simulation 2024, including verification checks (convergence, domain independence, mesh sensitivity) and an AoA sweep at ~40 mph.

**Key outputs:** Lift coefficient (CL), drag coefficient (CD), lift-to-drag ratio (L/D), plus qualitative flow interpretation from streamwise velocity (Vx) cuts and surface relative pressure / Cp scaling.

- **AoA sweep:** −2°, 0°, 2°, 4°, 6°, 8° at **V∞ ≈ 40 mph**
- **Verification workflow:** convergence (+100-iteration stability window), domain sensitivity, mesh sensitivity
- **Post-processing standard:** consistent views + fixed legend scales for clean visual comparisons

**Report**
- 📄 **BWB Executive Summary (PDF):** [Open PDF](assets/BWB%20Executive%20Summary.pdf)

### Selected Figures

<p align="center"><b>Streamwise velocity montage (Vx)</b></p>
<p align="center">
  <img src="assets/13CombinedVelX_STACKED_0_4_8_PORTFOLIO%20(1).png" width="62%">
</p>

<p align="center"><b>Surface relative pressure montage (0°, 4°, 8°)</b></p>
<p align="center">
  <img src="assets/CombinedRelPres_montage_0_4_8_PORTFOLIO.png" width="78%">
</p>

<p align="center"><b>Mesh sensitivity (α = 4° baseline)</b></p>
<p align="center">
  <img src="assets/ES3_mesh_sensitivity.png" width="68%">
</p>


---

<hr style="
border: none;
height: 1px;
background: linear-gradient(to right, transparent, #444, transparent);
margin: 50px 0;
">

<h2 style="display: flex; align-items: center; gap: 10px;">
  HyCUBE: CubeSat Thermal &amp; Instrumentation Payload
  <img src="assets/NASA_MN_SpaceGrantLogo.jpg" width="28" style="opacity: 0.9;">
</h2>

<p style="margin-top: -8px; color: #b0b0b0; font-style: italic;">
  NASA’s Minnesota Space Grant Consortium &amp; University of Minnesota SmallSat Program
</p>

<!-- Top-row overview visuals (keeps mission + balloon context) -->
<div style="display: flex; gap: 16px; justify-content: center; align-items: center; margin: 14px 0 10px 0;">
  <img src="assets/HyCubeINAir.png" width="32%">
  <img src="assets/hycube_mission_graphic.webp" width="32%">
  <img src="assets/hycube_parity_plot.png" width="32%">
</div>

<div style="
margin: 10px auto 18px auto;
max-width: 980px;
padding: 10px 14px;
background: #111;
border-left: 3px solid #7dd3fc;
color: #cbd5e1;
font-size: 0.95rem;
line-height: 1.45;
">
  <strong>Payload integration + validation pipeline.</strong>
  Built an end-to-end experiment and analysis workflow to quantify thermocouple sensitivity and measurement agreement versus a reference thermometer
  (with cold-junction compensation), supporting sensor selection and flight-readiness checks for HyCUBE testing (including high-altitude balloon operations).
</div>

<p style="color:#9ca3af; margin: 0 0 8px 0;">
  Role — <strong>Aerospace Systems Research Intern</strong> (Mechanical / Thermal Engineering — Instrumentation &amp; Data)
</p>

<p style="max-width: 980px; line-height: 1.55; margin: 0 0 12px 0;">
  Designed and executed thermocouple qualification experiments and produced decision-ready calibration outputs.
  The workflow converts raw voltage/temperature measurements into regression-based fits (with confidence bounds) and validates agreement using
  parity + Bland–Altman methods—making results reviewable, reproducible, and ready for documentation/design reviews.
</p>

<h4 style="margin-top: 16px; border-bottom: 1px solid #333; padding-bottom: 6px;">
  Results Snapshot (current dataset)
</h4>

<ul style="max-width: 980px; line-height: 1.55; margin-top: 10px;">
  <li>
    <strong>Estimated sensitivity (slope):</strong>
    19 in ≈ 44.51 µV/°C (R² ≈ 0.499),
    25 in ≈ 33.84 µV/°C (R² ≈ 0.377),
    30 in ≈ 45.05 µV/°C (R² ≈ 0.542)
  </li>
  <li>
    <strong>Agreement vs reference:</strong>
    overall bias ≈ 0.00°C with limits of agreement ≈ ±3.60°C (Bland–Altman)
  </li>
  <li>
    <strong>Deliverable:</strong> calibration summary + figures exported as PNGs suitable for reports and review decks
  </li>
</ul>

<h4 style="margin-top: 18px; border-bottom: 1px solid #333; padding-bottom: 6px;">
  Selected Figures
</h4>

<p style="color:#9ca3af; margin: 10px 0 6px 0;">
  <strong>Centered calibration fits + 95% confidence bands (shared axes)</strong>
</p>
<p align="center" style="margin: 0 0 10px 0;">
  <img src="assets/hycube_centered_fit_ci_shared_axes.png" width="88%">
</p>

<!-- Two-up layout to reduce scroll -->
<p style="color:#9ca3af; margin: 14px 0 6px 0;">
  <strong>Validation views (parity + error)</strong>
</p>
<p align="center" style="margin: 0;">
  <img src="assets/hycube_parity_plot.png" width="46%">
  <img src="assets/hycube_error_vs_reference.png" width="46%">
</p>

<p style="color:#9ca3af; margin: 14px 0 6px 0;">
  <strong>Agreement + sensitivity</strong>
</p>
<p align="center" style="margin: 0 0 6px 0;">
  <img src="assets/hycube_bland_altman_all.png" width="46%">
  <img src="assets/hycube_sensitivity_vs_length.png" width="46%">
</p>

<h4 style="margin-top: 18px; border-bottom: 1px solid #333; padding-bottom: 6px;">
  Key Contributions
</h4>

<ul style="max-width: 980px; line-height: 1.55;">
  <li>Designed thermocouple calibration experiments and produced decision-ready plots for sensor selection</li>
  <li>Implemented cold-junction compensation and regression-based calibration with confidence bounds</li>
  <li>Validated measurement behavior with parity + Bland–Altman agreement (bias and limits-of-agreement)</li>
  <li>Automated analysis outputs (tables + PNG exports) to keep results reproducible and reviewable</li>
  <li>Supported flight-readiness testing workflows, including high-altitude balloon operations and post-flight validation</li>
</ul>


---

## Stroke Detection from Non-Contrast Head CT

<p style="margin-top: -8px; color: #6b7280; font-style: italic;">
Machine Learning + Medical Imaging
</p>

<p align="center">
  <img src="assets/GradCam_StrokeUnlabeled.png" width="70%">
</p>

> **Model interpretability via Grad-CAM.**  
> Activation maps verify spatial focus on clinically relevant regions rather than skull/background artifacts.

<div style="display: flex; gap: 20px; justify-content: center;">
<img src="assets/ROC_curve_scratch.png" width="30%">
<img src="assets/ROC_curve_imagenet.png" width="30%">
<img src="assets/ROC_curve_jepa.png" width="30%">
</div>

> **Quantitative comparison.**  
> ROC-AUC curves comparing training from scratch, ImageNet pretraining, and JEPA-style initialization.

<p style="color:#6b7280; margin-bottom: 6px;">
Task — Binary hemorrhage detection from head CT
</p>

<p style="color:#6b7280; margin-bottom: 6px;">
Model — ResNet-18 (scratch, ImageNet pretrained, JEPA-style initialization)
</p>

Built and evaluated convolutional neural networks for hemorrhage detection using non-contrast head CT scans.  
Emphasis on validation and interpretability rather than accuracy alone.

### Key Contributions
- Compared initialization/training strategies via ROC-AUC evaluation
- Assessed generalization across training regimes
- Applied Grad-CAM to validate spatial reasoning and detect bias
- Focused on interpretability for real-world deployment

---

## Blended Wing Body UAV — <em>Aquila-S</em>

<p style="margin-top: -8px; color: #6b7280; font-style: italic;">
Aerodynamics & Vehicle Design
</p>

<p align="center">
  <img src="assets/Figure4_FlowView.jpg" width="70%">
</p>

> **Flow-field visualization.**  
> Surface pressure and velocity distributions used to evaluate lift generation and aerodynamic efficiency.

<div style="display: flex; gap: 20px; justify-content: center;">
<img src="assets/CLvA_BWB.png" width="35%">
<img src="assets/Cm_vs_aplot.jpg" width="35%">
</div>

> **Stability characterization.**  
> Lift and pitching-moment trends used to assess trim behavior and longitudinal stability.

Designed and analyzed a custom blended wing body UAV for aerodynamic efficiency and stability studies.

### Key Contributions
- Blended-wing geometry development and refinement
- Aerodynamic analysis of lift, moment, and flow behavior
- Stability assessment via pitching moment trends
- Integration of analysis results into design iteration
