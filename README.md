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

<hr>

<h2 style="display: flex; align-items: center; gap: 10px;">
HyCUBE: CubeSat Thermal & Instrumentation Payload
<img src="assets/NASA_MN_SpaceGrantLogo.jpg" width="28" style="opacity: 0.9;">
</h2>

<p style="margin-top: -8px; color: #6b7280; font-style: italic;">
NASA Minnesota Space Grant
</p>

<div style="display: flex; gap: 20px; justify-content: center; margin-bottom: 10px;">
<img src="assets/HyCubeINAir.png" width="32%">
<img src="assets/HyCubeThermoPlot_needupdate.png" width="32%">
<img src="assets/hycube_mission_graphic.webp" width="32%">
</div>

> **Payload integration and mission context.**  
> Flight hardware, thermal response trends, and orbital mission phases used to define environmental and design constraints.

<p style="color:#6b7280; margin-bottom: 6px;">
Role — Mechanical / Thermal Engineering
</p>

Designed and analyzed a CubeSat payload for atmospheric sensing under the NASA Minnesota Space Grant program.  
Work focused on thermal behavior, instrumentation integration, and mission-level constraints.

### Key Contributions
- Thermal modeling of payload components under orbital boundary conditions
- Instrument packaging and environmental considerations
- Data visualization of temperature response and mission profiles
- Collaboration with aerospace systems and electrical teams

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
