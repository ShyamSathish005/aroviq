import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
import os

# Ensure assets directory exists
output_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'assets')
os.makedirs(output_dir, exist_ok=True)
output_path = os.path.join(output_dir, 'benchmark_latency.png')

# Data
names = ['GPT-4o (Cloud)', 'Llama-3 (Local)', 'Aroviq (Tier 0 Rules)']
latencies = [1200, 650, 0.15]
colors = ['#ff0055', '#ff4d4d', '#00f2ea']  # Muted Red, lighter red, Neon Cyan

# Styling - Dark Mode
plt.style.use('dark_background')
fig, ax = plt.subplots(figsize=(10, 5))
fig.patch.set_facecolor('#0d1117')
ax.set_facecolor('#0d1117')

# Create Horizontal Bars
y_pos = np.arange(len(names))
bars = ax.barh(y_pos, latencies, height=0.6, color=colors, edgecolor='none')

# Log Scale for X-axis (Critical for showing 0.15 vs 1200)
ax.set_xscale('log')

# Remove borders (spines)
for spine in ax.spines.values():
    spine.set_visible(False)

# Remove ticks on y-axis
ax.yaxis.set_ticks_position('none')
ax.xaxis.set_ticks_position('none')

# Set Labels
ax.set_yticks(y_pos)
ax.set_yticklabels(names, fontsize=12, fontweight='bold', color='white')
ax.set_xlabel('Latency (ms) - Log Scale', fontsize=10, color='#8b949e')

# Annotate Bars with Values
for i, bar in enumerate(bars):
    width = bar.get_width()
    label_x_pos = width * 1.2 if i == 2 else width * 1.1 # Adjust for log scale visual
    
    # Text label of value
    ax.text(width * 1.1, bar.get_y() + bar.get_height()/2, 
            f'{latencies[i]} ms', 
            va='center', ha='left', 
            color='white', fontweight='bold', fontsize=11)

# Highlight "8000x Speedup"
# Drawing an arrow from GPT-4o to Aroviq
arrow_props = dict(facecolor='white', edgecolor='white', arrowstyle='->', connectionstyle="arc3,rad=-0.2", lw=1.5)
ax.annotate('8000x Faster', 
            xy=(0.17, 2),       # Pointing to Aroviq bar start (approx)
            xytext=(10, 0.5),    # Text location
            color='#00f2ea',
            fontsize=12,
            fontweight='bold',
            arrowprops=arrow_props)

# Title
plt.title("Latency Comparison: Hybrid vs. Pure LLM (Lower is Better)", 
          fontsize=14, fontweight='bold', color='white', pad=20)

plt.tight_layout()
plt.savefig(output_path, dpi=300, facecolor='#0d1117')
print(f"Chart saved to {output_path}")
