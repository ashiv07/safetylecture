# Presentation Architecture

This project builds an offline HTML presentation for a community safety seminar for seniors.

The presentation must run entirely offline from a USB drive.

No internet connection should be required.

## File Structure

content.md
    Source content for the presentation.

architecture.md
    Defines structure and design constraints for the project.

index.html
    The main presentation file.

style.css
    Styling for slides.

images/
    Optional images used in slides.

## Slide Structure

Each slide is a <section class="slide"> inside index.html.

Slides should be simple and readable for senior audiences.

Design principles:
- large fonts
- high contrast
- minimal text
- consistent layout

## Accessibility

Audience is primarily senior citizens.

Requirements:
- large readable fonts
- high contrast colors
- minimal clutter
- maximum 3–4 bullets per slide

## Portability

The presentation must:
- run offline
- open in any modern browser
- require no external libraries